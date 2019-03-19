import React, { useState } from 'react'
import Comment from './comment'

function CommentList({ comments }) {
  const [isOpen, setIsOpen] = useState(true)

  const buttonText = isOpen ? 'close comments' : 'open comments'
  const commentElements = comments.map((comment) => (
    <li key={comment.id}>
      <Comment comment={comment} />
    </li>
  ))
  const onBtnClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      {getBody(isOpen)}
      <button onClick={onBtnClick}>{buttonText}</button>
    </div>
  )

  function getBody(isOpen) {
    if (!isOpen) {
      return null
    }
    return (
      <div>
        <h3>Comments:</h3>
        <ul>{commentElements}</ul>
      </div>
    )
  }
}

export default CommentList
