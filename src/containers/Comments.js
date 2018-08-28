import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CommentForm } from '../components/CommentForm'
import { CommentsList } from '../components/CommentsList'

export class Comments extends Component {

  render(){
    return(
      <CommentForm />
      <CommentsList />
    )
  }
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return{

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
