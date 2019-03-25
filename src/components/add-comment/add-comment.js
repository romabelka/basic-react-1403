import React from 'react'
import PropTypes from 'prop-types'

class AddComment extends React.Component {
  static propTypes = {
    addComment: PropTypes.func.isRequired
  }

  constructor(...args) {
    super(...args)
    this.state = {
      user: 'Anonymous',
      userDefault: true,
      text: 'Enter comment',
      textDefault: true
    }

    this.handleTextInput = this.handleTextInput.bind(this)
    this.handleUserInput = this.handleUserInput.bind(this)
  }

  handleUserInput(e) {
    const { value } = e.target
    if (value.length > 20) return
    this.setState({ ...this.state, user: value, userDefault: false })
  }

  handleTextInput(e) {
    const { value } = e.target
    this.setState({ ...this.state, text: value, textDefault: false })
  }

  submitComment() {
    const { user, text } = this.state
    if (user.length < 5 || text.length < 20) return
    return this.props.addComment(this.state.user, this.state.text)
  }

  defineTextColor(fieldType, value) {
    switch (fieldType) {
      case 'username':
        if (this.state.userDefault) return 'grey'
        return value.length < 5 ? 'red' : 'black'
      case 'commenttext':
        if (this.state.textDefault) return 'grey'
        return value.length < 20 ? 'red' : 'black'
      default:
        return 'black'
    }
  }

  render() {
    return (
      <div className="AddComment">
        <label>
          User:
          <input
            onInput={this.handleUserInput}
            onChange={this.handleUserInput}
            value={this.state.user}
            style={{ color: this.defineTextColor('username', this.state.user) }}
          />
        </label>
        <br />
        <label>
          Text:
          <input
            onInput={this.handleTextInput}
            onChange={this.handleTextInput}
            value={this.state.text}
            style={{ color: this.defineTextColor('commenttext', this.state.text) }}
          />
        </label>
        <br />
        <button onClick={this.submitComment.bind(this)}>Comment</button>
      </div>
    )
  }
}

export default AddComment
