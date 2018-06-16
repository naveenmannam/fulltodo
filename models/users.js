const mongoose = require('mongoose');
const Joi = require('joi');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
      minlength: 2,
      trim: true
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

userSchema.pre('save', function(next){
  const user = this;
  bcrypt.genSalt(10, function(err, salt){
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, function(err, hash){
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

function validateUsers(user) {
  const schema = {
    email: Joi.string()
      .min(2)
      .email()
      .required(),
    password: Joi.string()
      .min(6)
      .required()
  };

  return Joi.validate(user, schema);
}
const Users = mongoose.model('User', userSchema);
module.exports = { Users, validateUsers };
