import React, { Component } from 'react';
import Header from '../Header/Header';
import GraphsLanding from '../GraphsLanding/GraphsLanding';

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
      </div>
    );
  }
}

export default LandingPage;