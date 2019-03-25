import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Comment from './comment'
import useToggler from '../custom-hooks/toggle-open'
import AddComment from './add-comment/add-comment'
import uuid from 'uuid/v1'

function CommentList({ comments, defaultOpen }) {
  const { isOpen, toggleOpen } = useToggler(defaultOpen)
  const [commentList, setComments] = useState(comments)

  const addComment = (commentList, setComments) => (user, text) => {
    const newComment = { id: uuid(), user, text }
    if (commentList && commentList.length) {
      setComments([...commentList, newComment])
    } else {
      setComments([newComment])
    }
  }

  const text = isOpen ? 'hide comments' : 'show comments'
  return (
    <div className="comment-list">
      <button onClick={toggleOpen}>{text}</button>
      <AddComment addComment={addComment(commentList, setComments)} />
      {getBody({ comments: commentList, isOpen })}
    </div>
  )
}

function getBody({ comments, isOpen }) {
  if (!isOpen) return null

  const body =
    comments && comments.length ? (
      <ul>
        {comments.map((comment) => (
          <li key={comment.id} className="comment-list-item">
            <Comment comment={comment} />
          </li>
        ))}
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
