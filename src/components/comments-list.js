import React from 'react'
import Comment from './comment'
import useToggleOpen from '../custom-hooks/toggle-open'

function CommentsList({ comments }) {
  const { isOpen, toggleOpen } = useToggleOpen()
  const btnText = isOpen ? 'Hide comments' : 'Show comments'

  return (
    <>
      <div>
        <button type="button" className="btn btn-secondary" onClick={toggleOpen}>
          {btnText}
        </button>
      </div>
      {getComments({ comments, isOpen })}
    </>
  )
}

function getComments({ comments, isOpen }) {
  const commentsList = comments.map((comment) => (
    <li key={comment.id} className="list-group-item">
      <Comment comment={comment} />
    </li>
  ))

  if (!isOpen) return null
  return <ul className="list-group list-group-flush mt-3">{commentsList}</ul>
}

export default CommentsList
