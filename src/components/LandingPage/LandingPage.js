import React, { Component } from 'react';
import Header from '../Header/Header';
import './LandingPage.css'
import GraphsLanding from '../GraphsLanding/GraphsLanding';
import LandingPage2 from '../LandingPage2/LandingPage2';

class LandingPage extends Component {
  constructor() {
    super();
    this.state = {}
  }
  render() {
    return (
      <div>
        <Header />
        <GraphsLanding />
        <div className="main-container">
          <div className="create-container">
            <h1 className="create-header">Create your digital currency portfolio today</h1>
            <p className="create-paragraph">Coinbase has a variety of features that make it the best place to start trading</p>
          </div>
        </div>
        <div className="features-container">
          <div className="manage-your-portfolio-container">
            <h3 className="manage-your-portfolio-header"><img src="https://www2.coinbase.com/assets/app-portfolio.png" alt=""/>Manage your portfolio</h3>
            <p className="manage-your-porfolio-paragraph">Buy and sell popular digital currencies, keep track of them in the one place.</p>
          </div>
          <div className="recurring-buys-container">
            <h3 className="recurring-buys-header"><img src="https://www2.coinbase.com/assets/app-recurring.png" alt=""/>Recurring buys</h3>
            <p className="recurring-buys-paragraph">Invest in digital currency slowly over time by scheduling buys daily, weekly, or monthly.</p>
          </div>
          <div className="vault-protection-container">
            <h3 className="vault-protection-header"><img src="https://www2.coinbase.com/assets/app-secure.png" alt=""/>Vault Protection</h3>
            <p className="vault-protection-paragraph">For added security, store your funds in a vault with time delayed withdrawals.</p>
          </div>
          <div className="mobile-apps-container">
            <h3 className="mobile-apps-header"><img src="https://www2.coinbase.com/assets/app-mobile.png" alt=""/>Mobile apps</h3>
            <p className="mobile-apps-paragraph">Stay on top of the markets with the Coinbase app for Android of iOS.</p>
          </div>
          <div className="coinbase-product">
            <img className="landing-picture"src="https://www2.coinbase.com/assets/app-product.png" alt="" />
          </div>
        </div>
        <LandingPage2 />
      </div >
    );
  }
}

export default LandingPage;