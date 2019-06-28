import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { deleteArticle, loadArticle } from '../ac'
import CommentList from './comment-list'
import { connect } from 'react-redux'
import Loader from './common/loader'
import { articleSelector } from '../selectors'
import i18n from './i18n'

function Article({ article, onBtnClick, deleteArticle, loadArticle, id, t }) {
  useEffect(() => {
    if (article && (article.text || article.loading)) return
    loadArticle(id)
  }, [id, article])
  if (!article) return null

  return (
    <div ref={setContainerRef}>
      <h3>{article.title}</h3>
      <button onClick={() => deleteArticle(article.id)}>{t('delete me')}</button>
      {getBody({ article })}
    </div>
  )
}

function setContainerRef(element) {
  //  console.log('---', element)
}

function getBody({ article }) {
  if (article.loading) return <Loader />

  return (
    <section className="test--article__body">
      {article.text}
      <CommentList article={article} />
    </section>
  )
}

Article.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string
  }),
  id: PropTypes.string
}

export default i18n(
  connect(
    (state, ownProps) => ({
      article: articleSelector(state, ownProps)
    }),
    { deleteArticle, loadArticle }
  )(Article)
)
