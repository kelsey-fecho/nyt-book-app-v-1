import React, { Component } from 'react';
import { connect } from 'react-redux';
import Books from './Books'
import BookSearch from '../components/BookSearch'

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

  handleSubmit = (query = 'austen') => {
   //  fetch(``)
   //   .then(res => res.json())
   //   .then(({results}) => this.setState({
   //     books: results.map(opp => ({title: book.title}))
   // }))
  }

  render() {
    return (
      <div className="App">
          <Books />
          <BookSearch onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
