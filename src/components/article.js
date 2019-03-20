import React from 'react'
import CommentList from './comment-list'

function Article({ isOpen, title, text, comments, onBtnClick }) {
  const btnText = isOpen ? 'close' : 'open'
  return (
    <div>
      <h3>{title}</h3>
      <button onClick={onBtnClick}>{btnText}</button>
      {getBody({ isOpen, text })}
      {getComments({ isOpen, comments })}
    </div>
  )
}

function getBody({ isOpen, text }) {
  if (isOpen) {
    return <section>{text}</section>
  }
  return null
}

function getComments({ isOpen, comments }) {
  return isOpen ? <CommentList comments={comments} /> : null
}

export default Article
