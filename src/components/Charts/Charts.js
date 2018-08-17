import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Charts.css'
class Charts extends Component {
  render() {
    return (
      <div>
        <div className="header-container">
          <div className="coinbase-logo">
            <Link to="/"><h4 style={{ textDecoration: 'none', color: 'white' }}>Coinbase</h4></Link>
          </div>
          <div className="product-button">
            Products
          </div>
          <div className="help-button">
            Help
          </div>
          <div className="chart-button">
            <Link to="/charts">Charts</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Charts;