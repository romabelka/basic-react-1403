import React, { Component } from 'react'
import './style.css'
import { addComment } from '../../ac'
import { connect } from 'react-redux'
import { articleSelector } from '../../selectors'

class CommentForm extends Component {
  static propTypes = {}

  state = {
    user: '',
    text: '',
    commentAdd: addComment
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        user:{' '}
        <input
          value={this.state.user}
          onChange={this.handleChange('user')}
          className={this.getClassName('user')}
        />
        comment:{' '}
        <input
          value={this.state.text}
          onChange={this.handleChange('text')}
          className={this.getClassName('text')}
        />
        <input type="submit" value="submit" disabled={!this.isValidForm()} />
      </form>
    )
  }

  handleSubmit = (ev) => {
    this.state.commentAdd(this.state.user, this.state.text)
    ev.preventDefault()
    this.setState({
      user: '',
      text: ''
    })
  }

  isValidForm = () => ['user', 'text'].every(this.isValidField)

  isValidField = (type) => this.state[type].length >= limits[type].min

  getClassName = (type) => (this.isValidField(type) ? '' : 'form-input__error')

  handleChange = (type) => (ev) => {
    const { value } = ev.target
    if (value.length > limits[type].max) return
    this.setState({
      [type]: value
    })
  }
}

const limits = {
  user: {
    min: 10,
    max: 50
  },
  text: {
    min: 10,
    max: 50
  }
}

export default connect(
  (state) => ({
    articles: articleSelector(state),
    comments: state.comments
  }),
  { addComment }
)(CommentForm)
