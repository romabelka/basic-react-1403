import React from 'react'
import Comment from './comment'
import useToogleOpen from '../../custom-hooks/toggle-open'

function CommentListHooks({ comments }) {
  const { isOpen, toggleOpenItem } = useToogleOpen()
  const text = isOpen ? 'close comments' : 'open comments'

  return (
    <div>
      <h3>Comments:</h3>
      <button onClick={toggleOpenItem}>{text}</button>
      <div>{getBody({ comments, isOpen })}</div>
    </div>
  )
}

function getBody({ comments, isOpen }) {
  if (!isOpen) return

  if (!comments || !comments.length) return 'No comments yet'

  const commentItems = comments.map((comment) => (
    <li key={comment.id}>
      <Comment comment={comment} />
    </li>
  ))

  return <ul>{commentItems}</ul>
}

export default CommentListHooks
