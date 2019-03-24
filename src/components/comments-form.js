import React, { Component } from 'react'
import styles from './index.css'

class CommentsForm extends Component {
  state = {
    name: '',
    comment: '',
    errors: { name: '', comment: '' },
    nameValid: false,
    commentValid: false,
    formValid: false
  }

  handleUserInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({ [name]: value }, () => {
      this.validateField(name, value)
    })
  }

  inputErrorsHandler = () => {
    const { errors } = this.state

    return (
      <div>
        {Object.keys(errors).map((fieldName, i) =>
          errors[fieldName].length > 0 ? (
            <p key={i}>
              {fieldName} {errors[fieldName]}
            </p>
          ) : (
            ''
          )
        )}
      </div>
    )
  }

  validateField = (fieldName, value) => {
    let fieldValidationErrors = this.state.errors
    let nameValid = this.state.nameValid
    let commentValid = this.state.commentValid

    if (fieldName === 'name') {
      nameValid = value.length >= 6
      fieldValidationErrors.name = nameValid ? '' : ' is too short'
    }

    if (fieldName === 'comment') {
      commentValid = value.length >= 6
      fieldValidationErrors.comment = commentValid ? '' : ' is too short'
    }

    this.setState(
      { formErrors: fieldValidationErrors, nameValid: nameValid, commentValid: commentValid },
      this.validateForm
    )
  }

  validateForm = () => {
    this.setState({ formValid: this.state.nameValid && this.state.commentValid })
  }

  render() {
    return (
      <React.Fragment>
        <form>
          <div>{this.inputErrorsHandler()}</div>
          <div className={styles.field}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              valid={this.state.valid}
              onChange={this.handleUserInput}
            />
          </div>
          <div className={styles.field}>
            <label>Comment:</label>
            <textarea name="comment" value={this.state.comment} onChange={this.handleUserInput} />
          </div>
          <div>
            <button type="submit" disabled={!this.state.formValid}>
              Send
            </button>
          </div>
        </form>
      </React.Fragment>
    )
  }
}

export default CommentsForm
