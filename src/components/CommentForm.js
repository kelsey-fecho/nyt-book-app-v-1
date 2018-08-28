import React, {Component} from 'react'
import { Form, FormGroup, Label, Input} from 'reactstrap'

export class CommentForm extends Component {

  constructor(){
    super();
    this.state={
      newcomment: '',
      newauthor: '',
    }
  }

  handleChange = e => {
    this.setState({
      e.target.name: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addComment(this.state)
    this.setState({
      newcomment: '',
      newauthor: ''
    })
  }

  render(){
    return(
      <Form onClick={this.handleSubmit()}>
        <FormGroup>
          <Label for='author'>Your Name</Label>
          <Input type='text' name='newauthor' id='newauthor'onChange={this.handleChange()} value={this.state.newauthor}/>
        </FormGroup>
        <FormGroup>
          <Label for='comment'>Your Comment</Label>
          <Input type='textarea' name='newcomment' id='newtext' onChange={this.handleChange()} value={this.state.newcomment}/>
        </FormGroup>
        <Input type='submit' />
      </Form>
    )
  }
}

export default CommentForm
