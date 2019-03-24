import React, { Component } from 'react'
import FormErrors from './form-errors'

const formControlStyle = {
  margin: '10px 0'
}

export default class AddComment extends Component {
  state = {
    username: '',
    comment: '',
    formErrors: { username: '', comment: '' },
    usernameValid: false,
    commentValid: false,
    formValid: false
  }

  handleInputChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({ [name]: value }, () => {
      this.validateField(name, value)
    })
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors
    let usernameValid = this.state.usernameValid
    let commentValid = this.state.commentValid
    switch (fieldName) {
      case 'username':
        usernameValid = false
        if (value.length === 0) {
          fieldValidationErrors.username = 'is required'
        } else if (value.length > 20) {
          fieldValidationErrors.username = 'must be less then 21 symbols'
        } else {
          usernameValid = true
          fieldValidationErrors.username = ''
        }
        break
      case 'comment':
        commentValid = false
        if (value.length === 0) {
          fieldValidationErrors.comment = 'is required'
        } else if (value.length > 300) {
          fieldValidationErrors.comment = 'must be less then 301 symbols'
        } else {
          commentValid = true
          fieldValidationErrors.comment = ''
        }
        break
      default:
        break
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        usernameValid: usernameValid,
        commentValid: commentValid
      },
      this.validateForm
    )
  }
  validateForm() {
    this.setState({ formValid: this.state.usernameValid && this.state.commentValid })
  }
  errorStyle(error) {
    return error.length === 0 ? { borderColor: 'initial' } : { borderColor: 'red' }
  }

  render() {
    return (
      <form className="test--add-comment__form" style={{ margin: '15px 15px', width: '600px' }}>
        <div style={formControlStyle}>
          <label htmlFor="username">Username:</label>
          <input
            name="username"
            type="text"
            onChange={this.handleInputChange}
            style={Object.assign(
              { width: '400px' },
              this.errorStyle(this.state.formErrors.username)
            )}
          />
        </div>
        <div style={formControlStyle}>
          <label htmlFor="comment">Comment:</label>
          <textarea
            name="comment"
            onChange={this.handleInputChange}
            rows="3"
            style={Object.assign(
              { width: '400px' },
              this.errorStyle(this.state.formErrors.comment)
            )}
          />
        </div>
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <button className="btn btn-primary" disabled={!this.state.formValid}>
          Save
        </button>
      </form>
    )
  }
}
