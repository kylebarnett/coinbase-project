module.exports = {
  getAll: (req, res) => {
    let db = req.app.get('db')
    // db.readCart().then(response => {
    //   res.status(200).send(response)
    // })
    res.status(200).send(req.session.user.cart)
  },

  add: (req, res) => {
    if (!req.session.cart) {
      let { item } = req.body
      req.session.user.cart.push(item)
      res.status(200).send(req.session.user.cart)
    }
  },

  remove: (req, res) => {
    let { id } = req.params
    let db = req.app.get('db')
    if (req.session.cart) {
      const { id } = req.query
      const { cart } = req.session.user
      for (let i = 0; i < cart.length; i++) {
        if (cart.id === id) {
          cart.id.splice(i, 1)
        }
      }
    }
    res.status(200).send(req.session.user)
  }
}

// if(req.session.cart){
//   const { id } = req.query
//   const { cart } = req.session.user
//    for(let i = 0; i < cart.length; i++){
//       if(cart.id === id){
//         cart.splice(i,1)
//       }
//    }
// }
// res.status(200).send(req.session.user)