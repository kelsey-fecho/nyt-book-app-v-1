import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Books from './Books'
import NavBar from '../components/NavBar'
import {fetchFiction} from'../actions/bookActions'

export class App extends Component {

  componentDidMount(){
    const API_KEY =`${process.env.REACT_APP_NYT_API_KEY}`
    this.props.fetchFiction();

     fetch(`https://api.nytimes.com/svc/books/v3/lists.json?list=combined-print-and-e-book-nonfiction&api-key=${API_KEY}`)
      .then(res => res.json())
      .then(({results}) => this.setState({
        nonfiction: results.map(book => ({title: book.book_details[0].title,
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
          <Route exact path='/' component={() => <Books books={this.props.fiction}/>} />
          <Route exact path='/fiction' component={() => <Books books={this.props.fiction}/>} />
          <Route exact path='/nonfiction' component={() => <Books books={this.state.nonfiction}/>} />

        </React.Fragment>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    fiction: state.fiction
  }
}

const mapDispatchToProps = dispatch => {
  return{
    fetchFiction: () => dispatch(fetchFiction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
