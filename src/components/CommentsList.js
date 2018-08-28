import React, {Component} from 'react'
import {Container, Row, Col} from 'reactstrap'
import Comment from '../components/Comment'

export default CommentsList extends Component{
  render(){
    return(
      <Container>
        <Row>
          {this.props.comments.map((comment, index) =>
            <Col md={{ ize: 8, offset: 2}}><Comment comment={comment} key={index} /></Col>
          )}
        </Row>
      </Container>
    )
  }
}
