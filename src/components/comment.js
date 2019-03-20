import React from 'react'

function Comment({ isOpen, comment, onBtnClick }) {
  const text = isOpen ? 'close' : 'open'
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
  return <section>{comment.text}</section>
}

export default Comment
