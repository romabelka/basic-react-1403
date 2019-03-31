import React from 'react'
import PropTypes from 'prop-types'
import { deleteArticle } from '../ac'
import CommentList from './comment-list'
import { connect } from 'react-redux'
import { createArticleSelector } from '../selectors'

function Article({ isOpen, article, onBtnClick, deleteArticle }) {
  const text = isOpen ? 'close' : 'open'
  //Совсем запутался, почему это работает
  return (
    <div ref={setContainerRef}>
      <h3>{article.title}</h3>
      <button onClick={onBtnClick} className="test--article__btn">
        {text}
      </button>
      <button onClick={() => deleteArticle(article.id)}>delete me</button>
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
  })
}

const createMapStateToProps = () => {
  const articleSelector = createArticleSelector()

  return (state, ownProps) => ({
    article: articleSelector(state, ownProps)
  })
}

export default connect(
  null,
  { deleteArticle }
)(connect(createMapStateToProps)(Article))
