const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    name:{
      type: String,
      required: true,
      min: 5,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    passwordHash: String,
  },
  {
    timestamps: true,
  },
);

module.exports = model('User', userSchema);


