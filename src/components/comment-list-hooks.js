import React from 'react'
import { array } from 'prop-types'
import Comment from './comment'
import CommentForm from './comments-form'
import useToggler from '../custom-hooks/toggle-open'

function CommentList({ comments }) {
  const { isOpen, toggleOpen } = useToggler()
  const text = isOpen ? 'hide comments' : 'show comments'

  return (
    <div className="comments-list">
      <button onClick={toggleOpen}>{text}</button>
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
          <li key={comment.id} className="comment-list__item">
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
      <CommentForm />
    </div>
  )
}

CommentList.propTypes = {
  comments: array.isRequired
}

/*
CommentList.defaultProps = {
  comments: [],
  defaultOpen: true
}
*/

export default CommentList
