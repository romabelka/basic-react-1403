import React from 'react'
import PropTypes from 'prop-types'
import CommentList from './comment-list-hooks'

function Article(props) {
  const { isOpen, article, onBtnClick } = props
  const text = isOpen ? 'close' : 'open'
  return (
    <div
      ref={setContainerRef}
      className="test--article"
    >
      <h3>{article.title}</h3>
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
      <CommentList comments={article.comments} />
    </section>
  )
}

Article.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string
  }).isRequired,
  onBtnClick: PropTypes.func,
  isOpen: PropTypes.bool
}

export default Article
