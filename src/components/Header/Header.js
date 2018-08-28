import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout, getUser } from '../../redux/reducers/user';
import axios from 'axios'
import { ToastContainer, ToastStore } from 'react-toasts'
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
      ToastStore.success('Successfully sent Getting Started Email!')
      this.setState({
        email: response.data
      })
    })
  }

  login = () => {
    let auth0domain = `https://${process.env.REACT_APP_AUTH0_DOMAIN}`
    let clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
    let scope = encodeURIComponent('openid profile email')
    let redirectUri = encodeURIComponent(`${window.location.origin}/auth/callback`) //callback?redirect=bitcoin
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
        <ToastContainer store={ToastStore} position={ToastContainer.POSITION.BOTTOM_RIGHT}/>
        <div className="main-header">
          <div className="main-header-navbar">
            <div className="coinbase-logo">
              <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Coinbase</Link>
            </div>
            <div className="other-buttons">
              <Link to="/products" style={{ height: '10px', textDecoration: 'none', color: 'white' }}>Products</Link>
              <Link to="/charts" style={{ height: '10px', textDecoration: 'none', color: 'white' }}>Charts</Link>
              <Link to="/cart" style={{ height: '10px', textDecoration: 'none', color: 'white' }}>Cart</Link>
            </div>
            <div className="dropdown">
              <button className="dropbtn">About</button>
              <div className="dropdown-content">
                <a href="#">About Us</a>
                <a href="#">Support</a>
                <a href="#">Carrers</a>
              </div>
            </div>
            <div className="login">
              <div className="login-button">
                {this.props.user ? <Link to="/" onClick={this.props.logout}>Logout</Link> : <a ref="" style={{ height: '10px', textDecoration: 'none', color: 'white', }} onClick={this.login}>Login</a>}
              </div>
            </div>
          </div>
          <div className="main-header-info-box">

            <div className="greeting-header-line">
              <h1 className="opening-line">Buy and sell digital currency</h1>
            </div>
            <div className="sub-opening-main">
              <p className="sub-opening">Coinbase is the easiest and most trusted place to buy, sell, and manage your digital currency.</p>
            </div>
            <div className="email-input-container">
              <div className="email-input-main">
                <input className="email-input" type="text" placeholder="Email Address" onChange={(e) => this.handleInputChange(e.target.value)}></input></div>
              <div className="email-main">
                <button className="email-button" onClick={this.getStarted}>Get Started</button></div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

let mapStateToProps = state => {
  return {
    user: state.user.user
  }
}

export default connect(mapStateToProps, { logout, getUser })(Header)

{/* <a href={null} onClick={this.login}>login</a>} */ }