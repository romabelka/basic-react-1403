import React from 'react'
import PropTypes from 'prop-types'
import CommentList from './comment-list-hooks'

function Article({ isOpen, article, onBtnClick }) {
  const text = isOpen ? 'close' : 'open'
  return (
    <div ref={setContainerRef}>
      <h3 data-article-title>{article.title}</h3>
      <button onClick={onBtnClick} className="test--article__btn">
        {text}
      </button>
      {getBody({ isOpen, article })}
    </div>
  )
}

function setContainerRef(element) {
  //  console.log('---', element)
}

function getBody({ isOpen, article }) {
  if (!isOpen) return null

  return (
    <section className="test--article__body">
      {article.text}
      {article.comments && <CommentList comments={article.comments} />}
    </section>
  )
}

Article.propTypes = {
  isOpen: PropTypes.bool,
  article: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string
  }),
  onBtnClick: PropTypes.func
}

export default Article
