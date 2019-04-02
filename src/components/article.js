import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { deleteArticle, loadArticle } from '../ac'
import CommentList from './comment-list'
import { connect } from 'react-redux'
import { createArticleLoadedSelector, createArticleLoadingSelector } from '../selectors'
import Loader from './common/loader'

function Article({ isOpen, article, onBtnClick, deleteArticle, loadArticle, loading, loaded }) {
  useEffect(() => {
    isOpen && !loaded && loadArticle(article.id)
  }, [isOpen])

  const text = isOpen ? 'close' : 'open'
  return (
    <div ref={setContainerRef}>
      <h3>{article.title}</h3>
      <button onClick={onBtnClick} className="test--article__btn">
        {text}
      </button>
      <button onClick={() => deleteArticle(article.id)}>delete me</button>
      {getBody({ isOpen, article, loading })}
    </div>
  )
}

function setContainerRef(element) {
  //  console.log('---', element)
}

function getBody({ isOpen, article, loading }) {
  if (!isOpen) return null
  if (loading) return <Loader />
  return (
    <section className="test--article__body">
      {article.text}
      <CommentList article={article} />
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

const mapStateToProps = (state) => {
  const articleLoadedSelector = createArticleLoadedSelector()
  const articleLoadingSelector = createArticleLoadingSelector()
  return (state, props) => ({
    loading: articleLoadingSelector(state, { id: props.article.id }),
    loaded: articleLoadedSelector(state, { id: props.article.id })
  })
}

export default connect(
  mapStateToProps,
  { deleteArticle, loadArticle }
)(Article)
