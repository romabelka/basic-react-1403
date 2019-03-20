import React from 'react'
import CommentsList from './Comments/CommentsList'

const Article = ({ isOpen, article, onBtnClick }) => {
  const text = isOpen ? 'close' : 'open'
  const articleComments = article.comments

  return (
    <div>
      <h3>{article.title}</h3>
      <button onClick={onBtnClick}>{text}</button>
      {isOpen ? (
        <React.Fragment>
          <section>{article.text}</section>
          <CommentsList comments={articleComments} />
        </React.Fragment>
      ) : null}
    </div>
  )
}

export default Article
