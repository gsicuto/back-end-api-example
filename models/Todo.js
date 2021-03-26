const { Schema, model } = require('mongoose');

const todoSchema = new Schema(
  {
    title: String,
    completed: Boolean,
  },
  {
    timestamps: true,
  },
);

module.exports = model('Todo', todoSchema);
