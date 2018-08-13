import React, { Component } from 'react';
import Header from './components/Header/Header';
import Charts from './components/Charts/Charts';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
      { routes }
      </div>
    );
  }
}

export default App;
