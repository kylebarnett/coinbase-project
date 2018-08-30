import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Charts from './components/Charts/Charts';  
import Cart from './components/Cart/Cart';

export default (
<HashRouter>
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/charts" component={Charts} />
    <Route path="/cart" component={Cart} />
  </Switch>
</HashRouter>
)