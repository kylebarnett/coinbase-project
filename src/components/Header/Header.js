import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

class Header extends Component {
  render() {
    return (
      <div className="main-header">
        <div className="coinbase-logo">
        <Link to="/" style={{ textDecoration: 'none', color: 'white'}}>Coinbase</Link>
        </div>
        <div className="other-buttons">
        <Link to="/products" style={{ textDecoration: 'none', color: 'white'}}>Products</Link>
        <Link to="/charts" style={{ textDecoration: 'none', color: 'white'}}>Charts</Link>
        </div>
      <div className="dropdown">
          <button className="dropbtn">About</button>
          <div className="dropdown-content">
            <a href="#">About Us</a>
            <a href="#">Support</a>
            <a href="#">Carrers</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Header