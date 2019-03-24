import React from 'react'
import PropTypes from 'prop-types'
import Comment from './comment'
import useToggler from '../custom-hooks/toggle-open'
import AddCommentForm from './add-comment-form'

function CommentList({ comments }) {
  const { isOpen, toggleOpen } = useToggler()
  const text = isOpen ? 'hide comments' : 'show comments'
  return (
    <div>
      <button className="test--comments__btn" onClick={toggleOpen}>
        {text}
      </button>
      {getBody({ comments, isOpen })}
    </div>
  )
}

function getBody({ comments, isOpen }) {
  if (!isOpen) return null

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
      <h3>No comments yet</h3>
    )

  return (
    <div>
      {body}
      <AddCommentForm />
    </div>
  )
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired
}

export default CommentList
