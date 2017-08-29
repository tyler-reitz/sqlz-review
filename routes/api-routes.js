const express = require('express')

const db = require('../models')

module.exports = function (app) {
  
  app.post("/add", (req, res) => {
    const { task_name, task_difficulty } = req.body;
    console.log(task_name, task_difficulty);

    db.Todos
      .create({ task_name: task_name, task_difficulty: task_difficulty })
      .then(result => {
        // console.log(result)
        res.redirect("/");
      })
  })
  
}
