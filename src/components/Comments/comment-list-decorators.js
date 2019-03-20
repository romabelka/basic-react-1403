import React, { Component } from 'react'
import Comment from './comment'
import toggleOpen from '../../decorators/toggle-open'

class CommentList extends Component {
  render() {
    const { isOpen, toggleOpenItem } = this.props
    const text = isOpen ? 'close comments' : 'open comments'

    return (
      <div>
        <h3>Comments:</h3>
        <button onClick={toggleOpenItem}>{text}</button>
        <div>{this.getBody()}</div>
      </div>
    )
  }

  getBody() {
    const { comments, isOpen } = this.props

    if (!isOpen) return

    const commentItems = comments.map((comment) => (
      <li key={comment.id}>
        <Comment comment={comment} />
      </li>
    ))

    return <ul>{commentItems}</ul>
  }
}

export default toggleOpen(CommentList)
