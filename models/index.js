require('dotenv').config();
const mongoose = require('mongoose');
const {Users, validateUsers} = require('./users');
const {Todos, validateTodos} = require('./todo');
mongoose.connect(process.env.DB_URI);
mongoose.Promise = global.Promise;

module.exports = {
  Users,
  Todos,
  validateTodos,
  validateUsers
}
