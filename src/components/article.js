import React from 'react'
import CommentsList from './comments-list'

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
    <>
      <section>{article.text}</section>
      <CommentsList comments={article.comments} />
    </>
  )
}

export default Article
