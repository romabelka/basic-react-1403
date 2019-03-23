import React from 'react'
import PropTypes from 'prop-types'
import Comment from './comment'
import useToggler from '../custom-hooks/toggle-open'
import AddCommentForm from './addingCommentForm/'

function CommentList({ comments }) {
  const { isOpen, toggleOpen } = useToggler()
  const text = isOpen ? 'hide comments' : 'show comments'
  return (
    <div>
      <button className="test--comment-list__btn" onClick={toggleOpen}>
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
          <li key={comment.id}>
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

/*
CommentList.defaultProps = {
  comments: [],
  defaultOpen: true
}
*/

export default CommentList
