import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Comment from './comment'
import useToggler from '../custom-hooks/toggle-open'
import CommentForm from './comment-form'
import { loadArticleComments } from '../ac'
import Loader from './common/loader'

function CommentList({ article, loadArticleComments }) {
  const { isOpen, toggleOpen } = useToggler()
  useEffect(() => {
    if (!isOpen || article.commentsLoaded || article.commentsLoading) return
    loadArticleComments(article.id)
  }, [isOpen])

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

function getBody({ article: { comments, id, commentsLoaded, commentsLoading }, isOpen }) {
  if (!isOpen) return null
  if (commentsLoading || !commentsLoaded) return <Loader />

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
  null,
  { loadArticleComments }
)(CommentList)
