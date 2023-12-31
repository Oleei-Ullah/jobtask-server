const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  deadline: {
    type: String,
  },
  author: String,
  authorEmail: String,
  status: {
    type: String
  },
  priority: String
});


const Task = mongoose.model('Task', taskSchema);

module.exports = Task;