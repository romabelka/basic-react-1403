import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Comment from './comment'
import useToggler from '../custom-hooks/toggle-open'
import CommentForm from './comment-form'
import { connect } from 'react-redux'
import { loadComments } from '../ac'
import Loader from './common/loader'

function CommentList({ article, loadComments }) {
  useEffect(() => {
    isOpen && !article.commentsLoading && !article.commentsLoaded && loadComments(article.id)
  })
  const { isOpen, toggleOpen } = useToggler()
  const text = isOpen ? 'hide comments' : 'show comments'
  return (
    <div>
      <button onClick={toggleOpen} className="test--comment-list__btn">
        {text}
      </button>
      {getBody({ article, isOpen })}
    </div>
  )
}

function getBody({ article: { comments, id, commentsLoading }, isOpen }) {
  if (!isOpen) return null

  if (commentsLoading) {
    return (
      <div className="test--comment-list__body">
        <Loader />
      </div>
    )
  }

  const body =
    comments && comments.length ? (
      <ul>
        {comments.map((comment) => (
          <li key={comment.id} className="test--comment-list__item">
            <Comment comment={comment} />
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
  null,
  { loadComments }
)(CommentList)
