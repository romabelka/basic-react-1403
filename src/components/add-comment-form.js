import React, { Component } from 'react'

export default class AddCommentForm extends Component {
  state = {
    username: '',
    comment: '',
    hasErrors: false
  }

  formElementChangeHandler = (e) => {
    const { value, name } = e.target
    this.setState({
      [name]: value
    })
  }

  addButtonHandler = () => {
    if (this.isFormValid()) {
      this.setState({
        hasErrors: false
      })
    } else {
      this.setState({
        hasErrors: true
      })
    }
  }

  isUsernameValid = (name) => {
    return name.length > 0 && name.length < 10
  }

  isCommentValid = (comment) => {
    return comment.length > 0 && comment.length < 50
  }

  isFormValid = () => {
    return this.isUsernameValid(this.state.username) && this.isCommentValid(this.state.comment)
  }

  render() {
    return (
      <div>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.formElementChangeHandler}
            style={{ borderColor: this.isUsernameValid(this.state.username) ? 'green' : 'red' }}
          />
        </div>
        <div>
          <label>Comment:</label>
          <textarea
            name="comment"
            value={this.state.comment}
            onChange={this.formElementChangeHandler}
            style={{ borderColor: this.isCommentValid(this.state.comment) ? 'green' : 'red' }}
          />
        </div>
        <button onClick={this.addButtonHandler}>Add comment</button>
        {this.state.hasErrors ? 'You have errors!' : ''}
      </div>
    )
  }
}
