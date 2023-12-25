const mongoose = require("mongoose");

const uri = process.env.MONGO_URI

const connectDatabase = async () => {
    try {
       await mongoose.connect(uri)
       console.log('database conected');
    } catch (error) {
        console.log(`failed to connect ${error}`);
    }
}

module.exports = connectDatabase;
