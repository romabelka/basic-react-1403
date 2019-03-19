import React, { useState } from 'react'
import useFoldable from '../custom-hooks/foldable'

function CommentList({ comments }) {
  const { isExpanded, toggleExpanded } = useFoldable()

  const getComments = () => {
    if (!isExpanded || !comments.length) return null
    return (
      <ul>
        {' '}
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
      <button onClick={toggleExpanded()}>{isExpanded ? 'hide comments' : 'show comments'}</button>
      {getComments()}
    </div>
  )
}

export default CommentList
