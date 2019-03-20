import React from 'react'
import CommentList from './comment-list'

function Article({ isOpen, article, onBtnClick }) {
  const text = isOpen ? 'close' : 'open'
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
      {article.comments && <CommentList comments={article.comments} />}
    </div>
  )
}

export default Article
