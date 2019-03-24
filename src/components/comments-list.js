import React from 'react'
import useToggleOpen from '../custom-hooks/toggle-open'

function CommentsList({ comments }) {
  const { isOpen, toggleOpen } = useToggleOpen()

  if (!comments) {
    return <p>no comments yet</p>
  }

  return (
    <>
      <button onClick={toggleOpen}>{isOpen ? 'hide comments' : 'show comments'}</button>
      {getBody({ comments, isOpen })}
    </>
  )
}

function getBody({ comments, isOpen }) {
  if (!isOpen) {
    return null
  }

  const commentItems = comments.map(({ id, user, text }) => (
    <li key={id}>
      <p>{user}</p>
      <p>{text}</p>
    </li>
  ))

  return <ul>{commentItems}</ul>
}

export default CommentsList
