const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
require('dotenv').config()

const app = express()

app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false
}))
app.use(bodyParser.json());


const port = 7777
app.listen(port, () => {
  console.log('This is going to be big', port)
})