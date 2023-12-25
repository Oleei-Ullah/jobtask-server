const Task = require("../collections/taskModel");
const mongoose = require("mongoose");

const addTasks = async (req, res) => {
  try {
    const added = await Task.create(req.body);
    res.send({ acknowledged: true, added });
  } catch (error) {
    res.status(400).send({ message: "Something happened wrong" });
  }
};


const getmytasks = async (req, res) => {
  const email = req.query.email;
  try {
    const mytasks = await Task.find({ authorEmail: email })

    res.send(mytasks);
  } catch (error) {}
};

const deleteTask = async (req, res) => {
  const id = req.params;
  console.log(id);
  try {
    const deleted = await Task.deleteOne({
      _id: new mongoose.Types.ObjectId(id),
    });
    res.send(deleted);
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
};

const updated = async (req, res) => {
  const id = req.params;
  const {status} = req.body;
  try {
    const updated = await Task.updateOne(
      { _id: new mongoose.Types.ObjectId(id) },
      { $set: { status: status } }
    );
    res.send(updated);
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
};


module.exports = {
  addTasks,
  getmytasks,
  deleteTask,
  updated,
};
