module.exports = {
  getUsers: (req, res) => {
    let db = req.app.get('db')
    db.getAllUsers().then(response => {
      res.send(response)
    }) 
  },

  newUser: (req, res) => {
    let db = req.app.get('db')
    let { email } = req.body
    db.newUserEmail( email ).then(response => {
      res.send(response)
    })
  }
}