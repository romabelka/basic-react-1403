import React from 'react'
import Comments from './comments'

function Article({ isOpen, article, onBtnClick, onCommentOpen }) {
  const text = isOpen ? 'close' : 'open'
  return (
    <div>
      <h3>{article.title}</h3>
      <button onClick={onBtnClick}>{text}</button>
      {getBody({ isOpen, article })}
      <Comments article={article} isOpened={false} onCommentOpen={onCommentOpen} />
    </div>
  )
}

function getBody({ isOpen, article }) {
  if (!isOpen) return null
  return <section>{article.text}</section>
}

export default Article
