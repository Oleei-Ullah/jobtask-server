const express = require('express');
const cors = require('cors');
require('dotenv').config();
const router = require('./router/router');
const connectDatabase = require('./utils/database');
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;

app.use("/api", router)



connectDatabase()
.then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`)
    })
})

