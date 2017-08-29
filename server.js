const express = require('express')
// const routes = require('./routes/api-routes')
const exphbs = require('express-handlebars')
const methodOveride = require('method-override')
const bodyParser = require('body-parser')

const db = require('./models')

const PORT = process.env.PORT || 8000
const app = express()

app.use(methodOveride('_method'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.text())
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// app.use(routes)
require('./routes/html-routes.js')(app)
require('./routes/api-routes')(app)

db.sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`App running on port: ${PORT}`))
})