import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Comment from './comment'
import useToggler from '../custom-hooks/toggle-open'
import CommentForm from './comment-form'
import { loadArticleComments } from '../ac'
import Loader from './common/loader'
import { commentsLoadedSelector, commentsLoadingSelector } from '../selectors'

function CommentList({ article, loaded, loading, loadArticleComments }) {
  const { isOpen, toggleOpen } = useToggler()

  useEffect(() => {
    !loaded && isOpen && loadArticleComments(article.id)
  }, [isOpen])

  const text = isOpen ? 'hide comments' : 'show comments'
  return (
    <div>
      <button onClick={toggleOpen} className="test--comment-list__btn">
        {text}
      </button>
      {getBody({ article, isOpen, loaded, loading })}
    </div>
  )
}

function getBody({ article: { comments, id }, isOpen, loaded, loading }) {
  if (!isOpen) return null

  if (loading) {
    return <Loader />
  }

  if (!loaded) {
    return null
  }

  const body =
    comments && comments.length ? (
      <ul>
        {comments.map((commentId) => (
          <li key={commentId} className="test--comment-list__item">
            <Comment id={commentId} />
          </li>
        ))}
      </ul>
    ) : (
      <h3 className="test--comment-list__empty">No comments yet</h3>
    )

  return (
    <div className="test--comment-list__body">
      {body}
      <CommentForm articleId={id} />
    </div>
  )
}

CommentList.propTypes = {
  comments: PropTypes.array
}

/*
CommentList.defaultProps = {
  comments: [],
  defaultOpen: true
}
*/

export default connect(
  (state, { article }) => ({
    loaded: commentsLoadedSelector(article),
    loading: commentsLoadingSelector(article)
  }),
  {
    loadArticleComments
  }
)(CommentList)
