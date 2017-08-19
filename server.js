const express = require('express')
const routes = require('./app/routes/api-routes')

const db = require('./app/models')

const app = express()
const PORT = process.env.PORT || 8000

app.use(routes)

app.listen(PORT, () => console.log(`App running on port: ${PORT}`))