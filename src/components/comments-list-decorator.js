import React, { Component } from 'react'
import Comment from './comment'
import toggleOpen from '../decorators/accordion';

class CommentsList extends Component {
  render() {
    return <ul>{this.getComments()}</ul>
  }

  getComments() {
    const { comments, openItemId, toggleOpenItem } = this.props

    if (!comments) {
      return null
    }

    return comments.map((comment) => (
      <li key={comment.id}>
        <Comment
          comment={comment}
          isOpen={comment.id === openItemId}
          onBtnClick={toggleOpenItem(comment.id)}
        />
      </li>
    ))
  }
}

export default toggleOpen(CommentsList)
