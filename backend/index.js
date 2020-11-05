require('dotenv').config()

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const RouteUser = require('./routes/User');
const cors = require('cors');

// ! Connect MongoDB
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
    .then(res => {
        console.log('mongodb is active')
    })
    .catch(e => {
        console.log('mongodb not connect')
    })
app.use(cors())
app.use(bodyParser.json());
app.use('/', RouteUser)

app.listen(process.env.PORT, (req, res) => {
    console.log(`server running on port ${process.env.PORT}`)
})