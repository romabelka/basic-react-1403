import React from 'react'
import CommentHeader from './comment-header'

function Article({ isOpen, article, onBtnClick }) {
  const text = isOpen ? 'Close' : 'Open'
  return (
    <div>
      <h3>{article.title}</h3>
      <button onClick={onBtnClick}>{text}</button>
      {getBody({ isOpen, article })}
    </div>
  )
}

function getBody({ isOpen, article }) {
  if (!isOpen) return null
  return (
    <div>
      <section>{article.text}</section>
      <h3>Comments</h3>
      <CommentHeader article={article} />
    </div>
  )
}

export default Article
