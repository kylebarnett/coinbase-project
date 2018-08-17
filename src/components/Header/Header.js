import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout, getUser } from '../../redux/reducers/user';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import './Header.css'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      email: ''
    }
  }

  // componentDidMount(){
  //   this.props.getUser()
  // }

  getStarted = () => {
    let { email } = this.state
    axios.post('/api/emails', { email }).then(response => {
      toast.success('Successfully sent Getting Started Email!')
      this.setState({
        email: response.data
      })
    })
  }

  login = () => {
    let auth0domain = `https://${process.env.REACT_APP_AUTH0_DOMAIN}`
    let clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
    let scope = encodeURIComponent('openid profile email')
    let redirectUri = encodeURIComponent(`${window.location.origin}/auth/callback`)
    let location = `${auth0domain}/authorize?client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}&response_type=code`

    window.location = location
  }

  handleInputChange = (event) => {
    this.setState({
      email: event
    })
  }
  render() {
    return (
      <div>
        <ToastContainer />
        <div className="main-header">
          <div className="coinbase-logo">
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Coinbase</Link>
          </div>
          <div className="other-buttons">
            <Link to="/products" style={{ height: '10px', textDecoration: 'none', color: 'white' }}>Products</Link>
            <Link to="/charts" style={{ height: '10px', textDecoration: 'none', color: 'white' }}>Charts</Link>
          </div>
          <div className="dropdown">
            <button className="dropbtn">About</button>
            <div className="dropdown-content">
              <a href="#">About Us</a>
              <a href="#">Support</a>
              <a href="#">Carrers</a>
            </div>
          </div>
          <div className="login-button">
          {this.props.user ? <Link to="/" onClick={this.props.logout}>Logout</Link> : <a ref="" style={{ height: '10px', textDecoration: 'none', color: 'white', }} onClick={this.login}>Login</a>}
          </div>
          <div className="greeting">
            <h1 className="opening">Buy and sell digital currency</h1>
              <p className="sub-opening">Coinbase is the easiest and most trusted place to buy, sell, and manage your digital currency.</p>
              <input className = "email-input" type="text" placeholder="Email Address" style={{ height: '10px' }} onChange={(e) => this.handleInputChange(e.target.value)}></input>
              <button className="email-button" style={{ height: '10px' }} onClick={this.getStarted}>Get Started</button>
          </div>
        </div>
      </div>
    )
  }
}

let mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { logout, getUser })(Header)

{/* <a href={null} onClick={this.login}>login</a>} */}