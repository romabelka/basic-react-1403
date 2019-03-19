import React, { useState } from 'react'
import Comment from './comment'
import ToggleItemDecorator from './../decorators/toggle-item'

function CommentList({ comments, isOpen, toggleItem }) {
  const buttonText = isOpen ? 'close comments' : 'open comments'
  const commentElements = comments.map((comment) => (
    <li key={comment.id}>
      <Comment comment={comment} />
    </li>
  ))

  return (
    <div>
      {getBody(isOpen)}
      <button onClick={toggleItem}>{buttonText}</button>
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

export default ToggleItemDecorator(CommentList)
