module.exports = {
  getAll: (req, res) => {
    let { id } = req.session.user
    let db = req.app.get('db')
    db.readCart(id).then(response => {
      res.status(200).send(response)
    })
    // res.status(200).send(req.session.user.cart)
  },

  add: (req, res) => {

    // if (!req.session.cart) {
      let { product, price, quantity } = req.body
      let { id } = req.session.user
      let db = req.app.get('db');
      //You will also have to insert into the cart table the product and quantity.
      //You need to decide where logic will occur to see if the user already has that product in their cart
      db.addToCart([ product, price, quantity, id ]).then(response => {
        res.status(200).send(response)
      })
    // }
  },
  
  // req.session.user.cart.push(item)
  // res.status(200).send(req.session.user.cart)


  update: (req, res) => {
    //id should reference the user id
    let { id } = req.session.user
    let { quantity } = req.query
    let db = req.app.get('db')
    db.updateQuantity(+quantity, id).then(response => {
      res.status(200).send(response)
    })
  },

  remove: (req, res) => {
    let { id } = req.params
    let db = req.app.get('db')
    db.deleteFromCart([id]).then(response => {
      res.status(200).send(response)
    })
  },

  checkout: (req, res) => {
    let db = req.app.get('db')
    db.checkout().then(response => {
      res.status(200).send(response)
    })
  },

  orders: (req, res) => {
    let db = req.app.get('db')
    db.moveToOrders().then(response => {
      res.status(200).send(response)
    }) 
  }
}
  
  //   let db = req.app.get('db')
  //   if (req.session.cart) {
  //     const { id } = req.query
  //     const { cart } = req.session.user
  //     for (let i = 0; i < cart.length; i++) {
  //       if (cart.id === id) {
  //         cart.id.splice(i, 1)
  //       }
  //     }
  //   }
  //   res.status(200).send(req.session.user)
  // }











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