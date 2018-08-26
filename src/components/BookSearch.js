import React, {Component} from 'react'
import {Form, Input} from 'reactstrap'

export default class BookSearch extends Component {
  constructor(){
    super()

    this.state={
      query:''
    }
  }
  formSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query)
  }

  render(){
    return(
      <Form inline onSubmit={this.formSubmit}>
        <Input type="text" value={this.state.query} onChange={e => this.setState({query: e.target.value})} />
        <Input type="submit" />
      </Form>
    )
  }
}
