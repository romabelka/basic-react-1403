import React from 'react'

export default function Comment({ comment }) {
  return (
    <div>
      <h6>{comment.user}</h6>
      <section>{comment.text}</section>
    </div>
  )
}
