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
      text: 'Enter comment'
    }

    this.handleTextInput = this.handleTextInput.bind(this)
    this.handleUserInput = this.handleUserInput.bind(this)
  }

  handleUserInput(event) {
    this.setState({ ...this.state, user: event.target.value })
    console.log(`Changed User value: ${event.target.value}`)
  }

  handleTextInput(event) {
    this.setState({ ...this.state, text: event.target.value })
    console.log(`Changed Text value: ${event.target.value}`)
  }

  submitComment() {
    return this.props.addComment(this.state.user, this.state.text)
  }

  render() {
    return (
      <div className="AddComment">
        <label>
          User
          <input onInput={this.handleUserInput.bind(this)} />
        </label>
        <label>
          Text
          <input onInput={this.handleTextInput.bind(this)} />
        </label>
        <button onClick={this.submitComment.bind(this)}>Comment</button>
      </div>
    )
  }
}

export default AddComment
