import React from 'react'
import CommentListHooks from './Comments/comment-list-decorators'

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
      <CommentListHooks comments={article.comments} />
    </section>
  )
}

export default Article
