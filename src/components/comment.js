import React from 'react'

function Comment({ comment }) {
  return (
    <div>
      <b>{comment.user}:</b>
      <div>{comment.text}</div>
    </div>
  )
}

export default Comment
