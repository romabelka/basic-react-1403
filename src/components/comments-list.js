import React, { useState } from 'react'

function CommentsList({ comments }) {
  const [isOpen, setIsOpen] = useState(false)
  const text = isOpen ? 'Hide comments' : 'Show comments'

  return (
    <>
      <div>
        <button type="button" className="btn btn-secondary" onClick={() => setIsOpen(!isOpen)}>
          {text}
        </button>
      </div>
      {getComments({ comments, isOpen })}
    </>
  )
}

function getComments({ comments, isOpen }) {
  const commentsList = comments.map(({ id, user, text }) => {
    return (
      <li key={id} className="list-group-item">
        <div>
          <strong>{user}</strong>
        </div>
        <div>{text}</div>
      </li>
    )
  })

  if (!isOpen) return null
  return <ul className="list-group list-group-flush mt-3">{commentsList}</ul>
}

export default CommentsList
