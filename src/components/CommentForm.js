import React, {Component} from 'react'

export class CommentForm extends Component {

  constructor(props){
    super(props);

    this.state={
      newcomment: '',
      newauthor: '',
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
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
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Your Name
            <input type='text' name='newauthor' id='newauthor'onChange={this.handleChange} value={this.state.newauthor}/>
          </label>
        </div>
        <div>
          <label>Your Comment
            <input type='textarea' name='newcomment' id='newtext' onChange={this.handleChange} value={this.state.newcomment}/>
          </label>
        </div>
        <div>
          <input type="submit"/>
        </div>
      </form>
    )
  }
}

export default CommentForm
