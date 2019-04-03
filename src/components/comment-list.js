import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Comment from './comment'
import useToggler from '../custom-hooks/toggle-open'
import CommentForm from './comment-form'
import { connect } from 'react-redux'
import { loadComments } from '../ac'

function CommentList({ article, loadComments }) {
  const { isOpen, toggleOpen } = useToggler()
  useEffect(() => {
    loadComments(article.id)
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

function getBody({ article, isOpen }) {
  const comments = article.comments
  const id = article.id
  if (!isOpen) return null

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
  { loadComments }
)(CommentList)
