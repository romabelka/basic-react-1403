import React from 'react'
import CommentsList from './Comments/CommentsList'

function Article({ isOpen, article, onBtnClick }) {
  const text = isOpen ? 'close' : 'open'
  const articleComments = article.comments

  console.log(articleComments, 'COMMENTS TO THIS ARTICLE')

  return (
    <div>
      <h3>{article.title}</h3>
      <button onClick={onBtnClick}>{text}</button>
      {getBody({ isOpen, article })}
      <CommentsList comments={articleComments} />
    </div>
  )
}

function getBody({ isOpen, article }) {
  if (!isOpen) return null
  return <section>{article.text}</section>
}

export default Article
