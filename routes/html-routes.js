const express = require('express')

const db = require('../models')

module.exports = function (app) {
  
  app.get('/', (req, res) => {

    db.Todos
      .findAll({})
      .then(result => {
        console.log(result)

        res.render('index', {todos: result})
      })
    
  })
  
}