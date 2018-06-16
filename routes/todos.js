const express = require('express');
const Joi = require('joi')
const router = express.Router();
const {Todos, validateTodos} = require('../models');

router
  .all('/todos', (req, res, next) => {
    (res.statusCode = 200), res.setHeader('Content-Type', 'Application/JSON');
    next();
  })
  .get('/todos', (req, res) => {
    // res.send({ message: 'Getting all todos' });
    Todos.find()
      .then(data => {
        res.json(data)
      })
      .catch(err => {
        res.send(err)
      })
  })
  .post('/todos', (req, res) => {
    // res.send({ message: 'Posting single todo' });
    const {error} = validateTodos(req.body);
    if(error){
      res.statusCode = 400;
      res.setHeader('Content-Type', 'Application/JSON')
      res.send({'message': `${error.details[0].message}`})
      return;
    }
    Todos.create(req.body)
      .then(data => {
        res.json(data)
      })
      .catch(err => {
        res.send(err)
      })
  })
  .put('/todos', (req, res) => {
    res.statusCode = 403;
    res.send({ message: 'PUT operation not permissible on all todos' });
  })
  .delete('/todos', (req, res) => {
    // res.send({ message: 'DELETE all todos' });
    Todos.remove()
      .then(() => {
        res.send({'message': 'All todos deleted'})
      })
      .catch(err => {
        res.send(err)
      })
  })
  .get('/todos/:id', (req, res) => {
    res.send({ message: 'Getting single todo' });
  })
  .post('/todos/:id', (req, res) => {
    res.statusCode = 403;
    res.send({ message: 'POST operation not permissible with ID' });
  })
  .put('/todos/:id', (req, res) => {
    res.send({ message: 'Updating single todo.' });
  })
  .delete('/todos/:id', (req, res) => {
    res.send({ message: 'DELETE single todo' });
  });

module.exports = router;
