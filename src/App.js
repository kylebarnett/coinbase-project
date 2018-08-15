import React, { Component } from 'react';
import Header from './components/Header/Header';
import Charts from './components/Charts/Charts';
import routes from './routes';
import { connect } from 'react-redux';
import {getUser} from './redux/reducers/user'


class App extends Component {
  componentDidMount() {
    this.props.getUser()
  }
  render() {
    return (
      <div className="App">
      { routes }
      </div>
    );
  }
}

export default connect(null, {getUser})(App);
