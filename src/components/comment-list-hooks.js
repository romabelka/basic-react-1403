import React from 'react'
import Comment from './comment'
import useToggler from '../custom-hooks/toggle-open'

function CommentList({ comments }) {
  const { isOpen, toggleOpen } = useToggler()
  const text = isOpen ? 'hide comments' : 'show comments'
  return (
    <div>
      <button onClick={toggleOpen}>{text}</button>
      {getBody({ comments, isOpen })}
    </div>
  )
}

function getBody({ comments, isOpen }) {
  if (!isOpen) return null

  const body = comments.length ? (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>
          <Comment comment={comment} />
        </li>
      ))}
    </ul>
  ) : (
    <h3>No comments yet</h3>
  )

  return <div>{body}</div>
}

export default CommentList
