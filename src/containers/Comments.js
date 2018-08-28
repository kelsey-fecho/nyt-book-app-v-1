import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CommentForm } from '../components/CommentForm'
import { CommentsList } from '../components/CommentsList'
import { addComment } from '../actions/commentActions'

export class Comments extends Component {

  render(){
    return(
      <React.Fragment>
        <CommentForm addComment={this.props.addComment}/>
        <CommentsList comments={this.props.comments}/>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments
  }
}

const mapDispatchToProps = dispatch => {
  return{
    addComment: formData => dispatch({type: "ADD_TODO", payload: formData})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
