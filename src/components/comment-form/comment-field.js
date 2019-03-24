import React, { Component } from 'react'
import classNames from 'classnames'
import './index.css'

const RULES = {
  name: /^[a-zA-Zа-яА-Я]+$/ui,
  text: /^[a-zA-Zа-яА-Я]+$/ui,
}

class CommentField extends Component {
  state = {
    name: '',
    text: '',
    nameValid: true,
    textValid: true,
  }

  handleNameField = (e) => {
    this.setState({name: e.currentTarget.value})
  }

  handleTextField = (e) => {
    this.setState({text: e.currentTarget.value})
  }

  submit = (e) => {
    e.preventDefault();
    if (this.state.name.length === 0 || this.state.text.length === 0) {
      this.setState({
        nameValid: false,
        textValid: false
      })
    }
  }

  validateName = () => {
    this.setState({
      nameValid: !!(RULES.name.test(this.state.name) && this.state.name.length > 4)
    })
  }

  validateText = () => {
    this.setState({
      textValid: !!(RULES.text.test(this.state.text) && this.state.text.length > 4)
    })
  }

  render() {
    console.log(this.state.nameValid && this.state.textValid, '1111')
    return (
      <div>
        <h2>Add Comment</h2>
        <form noValidate="novalidate" onSubmit={this.submit}>
          <div>
            <span>Name</span>
            <input
              type="text"
              placeholder={'Name'}
              value={this.state.name}
              onChange={this.handleNameField}
              onBlur={this.validateName}
              className={classNames('input', this.state.nameValid ? '' : 'error')}
            />
            {this.state.nameValid ? null : <span>wrong data</span>}
          </div>
          <div>
            <span>Text</span>
            <input
              type="text"
              placeholder={'Text'}
              value={this.state.text}
              onChange={this.handleTextField}
              onBlur={this.validateText}
              className={classNames('input', this.state.textValid ? '' : 'error')}
            />
            {this.state.textValid ? null : <span>wrong data</span>}
          </div>
          <button type="submit" disabled={!this.state.nameValid || !this.state.textValid}>Commit</button>
        </form>
      </div>
    )
  }
}

export default CommentField