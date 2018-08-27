import React, { Component } from 'react';
import Books from './Books'
import NavBar from '../components/NavBar'

class App extends Component {
  constructor(){
    super()
    this.state={
      books: []
    }
  }

  componentDidMount(){
    fetch('https://api.nytimes.com/svc/books/v3/lists.json?list=combined-print-and-e-book-fiction&api-key=e6b608fbf6e6484bab1b9663f82858e0')
     .then(res => res.json())
     .then(({results}) => this.setState({
       books: results.map(book => ({title: book.book_details[0].title,
                                   desc: book.book_details[0].description,
                                   author: book.book_details[0].author}))
     }))
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Books books={this.state.books}/>
      </div>
    );
  }
}

export default App;
