import React from 'react'
import Comments from './comments'

function Article({ isOpen, article: { text, title, comments = [] }, onBtnClick }) {
  const btnText = isOpen ? 'close' : 'open'
  return (
    <div>
      <h3>{title}</h3>
      <button onClick={onBtnClick}>{btnText}</button>
      {getBody({ isOpen, text })}
      <Comments comments={comments} />
    </div>
  )
}

function getBody({ isOpen, text }) {
  if (!isOpen) return null
  return <section>{text}</section>
}

export default Article
