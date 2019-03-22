import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Comment from './comment'
import useToggler from '../custom-hooks/toggle-open'

function CommentList({ comments }) {
  const { isOpen, toggleOpen } = useToggler()
  const text = isOpen ? 'hide comments' : 'show comments'
  return (
    <div>
      <button onClick={toggleOpen}>{text}</button>
      {getBody({ comments, isOpen })}
    </div>
  )
}

function getBody({ comments, isOpen }) {
  const [username, setUsername] = useState('Username');
  const [commentText, setCommentText] = useState('New Comment');

  if (!isOpen) return null

  const handleUserChange = (ev) => {
    const { value } = ev.target
    setUsername(value.length < 10 ? value : '')
  }

  const handleCommentTextChange = (ev) => {
    const { value } = ev.target
    setCommentText(value.length < 10 ? value : commentText.slice(0,10))
  }

  const body =

    comments && comments.length ? (
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <Comment comment={comment} />
          </li>
        ))}
        <input
          type="text"
          value={username}
          onChange={handleUserChange}
          style={{
            color: username.length < 5 ? 'red' : 'black'
          }}
        />
        <input
          type="text"
          value={commentText}
          onChange={handleCommentTextChange}
        />
      </ul>
    ) : (
      <h3>No comments yet</h3>
    )

  return <div>{body}</div>
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
