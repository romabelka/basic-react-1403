import React from 'react'
import Comment from './comment'

function Article({ isOpen, article, onBtnClick, comments }) {
  const text = isOpen ? 'close' : 'open'

  const commentsList = comments
    ? comments.map((comment) => (
        <li key={comment.id}>
          <Comment userName={comment.user} text={comment.text} />
        </li>
      ))
    : null
  return (
    <div>
      <h3>{article.title}</h3>
      <button onClick={onBtnClick}>{text}</button>
      {getBody({ isOpen, article, commentsList })}
    </div>
  )
}

function getBody({ isOpen, article, commentsList }) {
  if (!isOpen) return null
  return (
    <div>
      <section>{article.text}</section>
      <h4>Комментарии</h4>
      <ul>{commentsList}</ul>
    </div>
  )
}

export default Article
