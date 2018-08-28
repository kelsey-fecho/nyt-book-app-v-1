import React, {Component} from 'react'
import {Container, Row, Col} from 'reactstrap'
import {addComment} from '../actions/commentActions'
export class CommentForm extends Component {

  constructor(){
    super();

    this.state={
      comment: '',
      author: '',
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault()
    addComment(this.state)
    console.log(addComment(this.state))
    this.setState({
      comment: '',
      author: ''
    })
  }

  render(){
    return(
      <Container>
        <Row>
          <Col md={{ ize: 8, offset: 2}}>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label>Your Name
                  <input type='text' name='author' id='newauthor'onChange={this.handleChange} value={this.state.author}/>
                </label>
              </div>
              <div>
                <label>Your Comment
                  <input type='textarea' name='comment' id='newtext' onChange={this.handleChange} value={this.state.comment}/>
                </label>
              </div>
              <div>
                <input type="submit"/>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default CommentForm
