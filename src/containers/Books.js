import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Container, Row, Col} from 'reactstrap'
import BookCard from '../components/BookCard'

class Books extends Component {
  render() {
    return(
      <Container>
        <Row>
          {this.props.books.map(opp => <Col sm="4"><BookCard book={book}/></Col>)}
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps, null)(Books);
