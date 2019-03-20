import React, { Component } from 'react'
import TogglerDecorator from '../decorators/toggler'
import Comment from './comment'

class CommentList extends Component {
  getComments = () =>
    this.props.comments.map((comment) => {
      return (
        <li key={comment.id}>
          <Comment comment={comment} />
        </li>
      )
    })

  getList = (isOpen) => {
    if (!isOpen) return null
    return <ul>{this.getComments()}</ul>
  }

  render() {
    const { isOpen, toggleOpen } = this.props
    const text = (isOpen ? 'close' : 'open') + ' comments'
    return (
      <>
        <button onClick={toggleOpen}>{text}</button>
        {this.getList(isOpen)}
      </>
    )
  }
}

export default TogglerDecorator(CommentList)
