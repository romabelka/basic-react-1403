import React, { Component } from 'react'

export default class CommentForm extends Component {
  state = {
    username: '',
    comment: '',
    hasErrors: false
  }

  onFieldInput = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  isFieldValid = (value) => value.length > 0

  isCommentValid = (comment) => {
    return comment.length > 0
  }

  onSubmit = (e) => {
    e.preventDefault()
    e.target.classList.add('was-validated')

    if (this.isFormValid()) {
      this.setState({
        username: '',
        comment: '',
        hasErrors: false
      })
      e.target.classList.remove('was-validated')
    } else {
      this.setState({
        hasErrors: true
      })
    }
  }

  isFormValid = () => {
    const { username, comment } = this.state
    return this.isFieldValid(username) && this.isFieldValid(comment)
  }

  render() {
    const { username, comment, hasErrors } = this.state
    return (
      <form className="needs-validation" action="/" onSubmit={this.onSubmit} noValidate>
        <fieldset>
          <legend>Comment Form</legend>
          <div className="form-group">
            <label htmlFor="username">Your name</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              placeholder="Your name"
              value={username}
              onChange={this.onFieldInput}
              required
            />
            {hasErrors && <div className="invalid-feedback">This field is required</div>}
          </div>
          <div className="form-group">
            <label htmlFor="comment">Comment</label>
            <textarea
              className="form-control"
              id="comment"
              name="comment"
              placeholder="Write your comment"
              value={comment}
              onChange={this.onFieldInput}
              required
            />
            {hasErrors && <div className="invalid-feedback">This field is required</div>}
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </div>
        </fieldset>
      </form>
    )
  }
}
