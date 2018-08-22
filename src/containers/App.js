import React, { Component } from 'react';
import { connect } from 'react-redux';
import Opportunities from './Opportunities'

class App extends Component {
  constructor(){
    super();
    this.state={
      opps: []
    }
  }

  componentDidMount(){
    this.handleSubmit()
  }

  handleSubmit = (query = 'volunteer') => {
    fetch('')
    .then(res => res.json())
    .then(({data}) => this.setState({
      opps: data.map(opp => ({title: opp.title}))
    }))
  }

  render() {
    return (
      <div className="App">
          <Opportunities />
          <OppSearch onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
