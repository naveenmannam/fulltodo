const express = require('express');
const _ = require('lodash');
const router = express.Router();
const { Users, validateUsers } = require('../models');

router
  .route('/users')
  .get((req, res) => {
    res.statusCode = 403;
    res.send({ message: 'Invalid request' });
  })
  .post((req, res, next) => {
    // res.send({ message: "Posting user" });
    const result = validateUsers(req.body);
    if (result.error) {
      res.status(403).send(result.error.details[0].message);
      return;
    }
    Users.findOne({ email: req.body.email })
      .then(
        data => {
          if (data) {
            res.statusCode = 403;
            res.send({ message: 'User exists in database' });
            // return;
          }
          Users.create(req.body)
            .then(data => {
              res.statusCode = 200;
              res.send(_.pick(data, ["_id", "email"]));
            })
            .catch(err => next(err));
        },
        err => next(err)
      )
      .catch(err => next(err));
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.send({ message: 'Invalid request' });
  })
  .delete((req, res) => {
    res.statusCode = 403;
    res.send({ message: 'Invalid request' });
  });

router
  .route('/users/:id')
  .get((req, res) => {
    res.json({ message: 'Getting single user' });
  })
  .post((req, res) => {
    res.statusCode = 403;
    res.json({ message: 'Invalid request' });
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.json({ message: 'Invalid request' });
  })
  .delete((req, res, next) => {
    // res.json({ message: 'DELETE single user' });
    Users.findById(req.params.id)
      .then(data => {
        if (!data) {
          res.statusCode = 403;
          res.setHeader('Content-Type', 'Application/JSON');
          res.json({ message: 'Invalid request' });
        }
      })
      .catch(err => next(err));
  });

module.exports = router;
