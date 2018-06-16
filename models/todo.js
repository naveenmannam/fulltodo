const mongoose = require('mongoose');
const Joi = require('joi');

const todoSchema = new mongoose.Schema(
  {
    item: {
      type: String,
      unique: true,
      required: true,
      minlength: 2,
      trim: true
    },
    desc: {
      type: String,
      required: true,
      minlength: 10,
      trim: true
    },
    completed: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

const Todos = mongoose.model('Todo', todoSchema);
function validateTodos(todo) {
  const schema = {
    item: Joi.string()
      .min(2)
      .required(),
    desc: Joi.string()
      .min(10)
      .required()
  };

  return Joi.validate(todo, schema);
}
module.exports = { Todos, validateTodos };
