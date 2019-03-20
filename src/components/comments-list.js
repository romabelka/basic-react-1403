import React, { useState } from 'react'
import Comment from './comment'

function CommentsList({ comments }) {
  const [isOpen, setIsOpen] = useState(false)

  const btnText = isOpen ? 'Hide comments' : 'Show comments'
  const onBtnClick = () => setIsOpen(!isOpen)

  return (
    <>
      <div>
        <button type="button" className="btn btn-secondary" onClick={onBtnClick}>
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
