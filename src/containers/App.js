import React, { Component } from 'react';
import { connect } from 'react-redux';
import Opportunities from './Opportunities'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
          <Opportunities />
        </header>
      </div>
    );
  }
}

export default App;
