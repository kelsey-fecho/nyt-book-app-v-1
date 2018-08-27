import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Books from './Books'
import NavBar from '../components/NavBar'

class App extends Component {
  constructor(){
    super()
    this.state={
      fiction: [],
      nonfiction: []
    }
  }

  componentDidMount(){
    fetch('https://api.nytimes.com/svc/books/v3/lists.json?list=combined-print-and-e-book-fiction&api-key=e6b608fbf6e6484bab1b9663f82858e0')
     .then(res => res.json())
     .then(({results}) => this.setState({
       fiction: results.map(book => ({title: book.book_details[0].title,
                                   desc: book.book_details[0].description,
                                   author: book.book_details[0].author,
                                   link: book.amazon_product_url}))
     }))
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar />
          <Route exact path='/' component={() => <Books books={this.state.fiction}/>} />
          <Route exact path='/fiction' component={() => <Books books={this.state.fiction}/>} />
          <Route exact path='/' component={() => <Books books={this.state.nonfiction}/>} />

        </React.Fragment>
      </Router>
    );
  }
}

export default App;
