import React from 'react'

function Comment({ isOpen, comment, onBtnClick }) {
  const text = isOpen ? 'Close' : 'Open'
  return (
    <div>
      <h3>{comment.user}</h3>
      <button onClick={onBtnClick}>{text}</button>
      {getBody({ isOpen, comment })}
    </div>
  )
}

function getBody({ isOpen, comment }) {
  if (!isOpen) return null
  return (
    <div>
      <section>{comment.text}</section>
    </div>
  )
}

export default Comment
