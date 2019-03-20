import React from 'react'

function CommentList({ comments }) {
  const commentItems = !comments
    ? null
    : comments.map((comment) => <li key={comment.id}>{comment.text}</li>)

  return <ul>{commentItems}</ul>
}

export default CommentList
