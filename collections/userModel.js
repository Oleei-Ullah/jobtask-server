const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: "normal"
    },
    photoURL: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    subscription: Boolean
})


const TaskUser = new mongoose.model("taskUser", userSchema);

module.exports = TaskUser;