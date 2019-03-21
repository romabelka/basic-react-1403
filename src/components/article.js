import React from 'react'
import CommentList from './comment-list-hooks'

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
    <section>
      {article.text}
      <CommentList comments={article.comments} />
    </section>
  )
}

export default Article
