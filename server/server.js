const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
const controller = require('./controllers/controller');
const AuthCtrl = require('./controllers/AuthCtrl');
const CoinData = require('./controllers/CoinData');
require('dotenv').config()

const app = express()

massive(process.env.CONNECTION_STRING).then(db => {
  app.set('db', db)
})

app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false
}))
app.use(bodyParser.json());

app.get('/auth/callback', AuthCtrl.auth)
app.get('/api/currentUser', (req, res) => {
  res.send(req.session.user)
})

//users

app.get('/api/users', controller.getUsers)
app.post('/api/emails', controller.newUser)

app.get('/api/logout', (req, res) => {
  req.session.destroy()
  res.sendStatus(200)
})


const port = 7777
app.listen(port, () => {
  console.log('This is going to be big', port)
})