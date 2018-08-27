import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage2.css';

class LandingPage2 extends Component {
  render() {
    return (
      <div>
        <div className="main-container">
          <div className="header-container2">
            <div className="header">
              <h1 className="header-text">The most trusted digital currency platform</h1>
              <p className="header-paragraph">Here are a few reasons why you should choose Coinbase</p>
            </div>
          </div>
        </div>
        <div className="body-container">
          <div className="body">
            <div className="safe">
              <img className="safe-image" src="https://www2.coinbase.com/assets/icon-safe.png" alt="" />
              <h3 className="safe-header">Secure Storage</h3>
              <p className="safe-paragraph">We store the vast majority of the digital assets held on Coinbase in secure offline storage.</p>
            </div>
            <div className="insurance">
              <img className="insurance-image" src="https://www2.coinbase.com/assets/icon-insurance.png" alt="" />
              <h3 className="insurance-header">Protected by insurance</h3>
              <p className="insurance-paragraph">Digital currency stored on our servers is covered by our insurance policy.</p>
            </div>
            <div className="shield">
              <img className="shield-image" src="https://www2.coinbase.com/assets/icon-shield.png" alt="" />
              <h3 className="shield-header">Industry best practices</h3>
              <p className="shield-paragraph">We take security seriously, and have built a reputaion of being the most trusted in the space.</p>
            </div>
          </div>
        </div>
        <div className="blue-container">
          <div className="dollar-section">
            <div className="dollar-stuff">
              <h2 className="dollar-header">$150B+</h2>
              <p className="dollar-paragraph">Digital currency exchanged</p>
            </div>
          </div>
          <div className="countries-section">
            <div className="countries-stuff">
              <h2 className="countries-header">32</h2>
              <p className="countries-paragraph">Countries supported</p>
            </div>
          </div>
          <div className="customers-section">
            <div className="customers-stuff">
              <h2 className="customers-header">20M+</h2>
              <p className="customers-paragraph">Customers served</p>
            </div>
          </div>
        </div>
        <div className="get-started-container">
          <div className="get-started-section">
            <div className="get-started">
              <h2 className="get-started-header">Get started in a few minutes</h2>
            </div>
          </div>
        </div>
        <div className="last-container">
          <div className="body2">
            <div className="create-header">
              <img className="create-image" src="https://www2.coinbase.com/assets/icon-add.png" />
              <h3 className="create">Create an account</h3>
            </div>
            <div className="link-header">
              <img className="link-image" src="https://www2.coinbase.com/assets/icon-bank.png" />
              <h3 className="link">Link your bank account</h3>
            </div>
            <div className="start-header">
              <img className="start-image" src="https://www2.coinbase.com/assets/icon-handout.png" />
              <h3 className="start">Start buying & selling</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage2;