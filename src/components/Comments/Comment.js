import React from 'react'

const Comment = ({ isOpen, comment, onBtnClick }) => {
  const text = isOpen ? 'close' : 'open'
  return (
    <div>
      <h3>{comment.user}</h3>
      <button onClick={onBtnClick}>{text}</button>
      {isOpen ? <section>{comment.text}</section> : null}
    </div>
  )
}

export default Comment
