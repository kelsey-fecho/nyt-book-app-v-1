import React, {Component} from 'react'

const Comment = ({comment}) => {
  <div className="border rounded align-middle">
    <p>{comment.text}</p>
    <p><i>{comment.author}</i></p>
  </div>
}

export default Comment
