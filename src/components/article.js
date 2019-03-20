import React from 'react'
import CommentsList from './comments-list'

function Article({ isOpen, article, onBtnClick }) {
  const text = isOpen ? 'close' : 'open'
  return (
    <>
      <div className="d-flex justify-content-between align-items-baseline">
        <h4>{article.title}</h4>
        <button type="button" className="btn btn-primary" onClick={onBtnClick}>
          {text}
        </button>
      </div>
      {getBody({ isOpen, article })}
    </>
  )
}

function getBody({ isOpen, article }) {
  if (!isOpen) return null
  return (
    <section className="pt-3">
      <div className="mb-3">{article.text}</div>
      <div className="mb-3">{article.comments && <CommentsList comments={article.comments} />}</div>
    </section>
  )
}

export default Article
