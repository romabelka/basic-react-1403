import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Comment from './comment'
import useToggler from '../custom-hooks/toggle-open'
import CommentForm from './comment-form'
import { loadComments } from '../ac'
import Loader from './common/loader'
import { commentsLoadedSelector, commentsLoadingSelector } from '../selectors'

function CommentList({ article, loadComments, commentsLoaded, commentsLoading }) {
  const { isOpen, toggleOpen } = useToggler()

  useEffect(() => {
    if (!isOpen || commentsLoaded || commentsLoading) return

    loadComments(article.id)
  }, [isOpen])

  const text = isOpen ? 'hide comments' : 'show comments'

  return (
    <div>
      <button onClick={toggleOpen} className="test--comment-list__btn">
        {text}
      </button>
      {getBody({ article, isOpen, commentsLoaded, commentsLoading })}
    </div>
  )
}

function getBody({ article: { comments, id }, isOpen, commentsLoaded, commentsLoading }) {
  if (!isOpen) return null

  if (commentsLoading) return <Loader />

  if (!commentsLoaded) return null

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

export default connect(
  (state, { article }) => ({
    commentsLoaded: commentsLoadedSelector(article),
    commentsLoading: commentsLoadingSelector(article)
  }),
  { loadComments }
)(CommentList)
