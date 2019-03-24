import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Comment from './comment'
import useToggler from '../custom-hooks/toggle-open'
import Form from './form/form'

function CommentList(props) {
  const { isOpen, toggleOpen } = useToggler()
  const [comments, setComments] = useState(props.comments)
  const text = isOpen ? 'hide comments' : 'show comments'

  const handleFormSubmit = (comment) => setComments([...comments, comment])

  return (
    <div>
      <button onClick={toggleOpen}>{text}</button>
      {getBody({ comments, isOpen, handleFormSubmit })}
    </div>
  )
}

function getBody({ comments, isOpen, handleFormSubmit }) {
  if (!isOpen) return null

  const body =
    comments && comments.length ? (
      <>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <Comment comment={comment} />
            </li>
          ))}
        </ul>
        <Form onSubmit={handleFormSubmit} />
      </>
    ) : (
      <h3>No comments yet</h3>
    )

  return <div>{body}</div>
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired
}

export default CommentList
