require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
const controller = require('./controllers/controller');
const AuthCtrl = require('./controllers/AuthCtrl');
const checkForLogin = require('./middleware/checkForLogin');
const cart = require('./controllers/cart');

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
app.use( express.static( `${__dirname}/../build` ) );

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

//cart

app.get('/api/cart', cart.items)
// app.get('api/cart', function(req, res, next){
//   req.query.coins
//   if(req.query.bitcoin){
//     var results = results.filter(function(e){
//       return e.bitcoin === req.query.bitcoin
//     })
//   }
//   res.send(results)
// })
app.post('/api/cart', cart.add)
app.delete('/api/cart/:id', cart.remove)
app.put('/api/cart/:id', cart.update)
app.get('/api/cart', cart.getAll)
app.post('/api/checkout', cart.checkout)


const port = 7777
app.listen(port, () => {
  console.log('This is going to be big', port)
}) 