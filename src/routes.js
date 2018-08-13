import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Charts from './components/Charts/Charts';
import Products from './components/Products/Products';

export default (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/charts" component={Charts} />
    <Route path="/products" component={Products} />
  </Switch>
)