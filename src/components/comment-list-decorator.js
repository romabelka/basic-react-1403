import React, { useState } from 'react'
import foldable from '../decorators/foldable'

function CommentList({ comments, isExpanded, toggleExpansion }) {
  const getComments = () => {
    if (!isExpanded) return null
    if (!comments || !comments.length) return <div>No comments</div>
    return (
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.id}>
              <div>User: {comment.user}</div>
              <div>{comment.text}</div>
            </li>
          )
        })}{' '}
      </ul>
    )
  }

  return (
    <div>
      <button onClick={toggleExpansion()}>{isExpanded ? 'hide comments' : 'show comments'}</button>
      {getComments()}
    </div>
  )
}

export default foldable(CommentList)
