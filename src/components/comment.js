import React from 'react'

export default function Comment({ comment }) {
  return (
    <div>
      <div>
        <strong>{comment.user}</strong> wrote:
      </div>
      <div>{comment.text}</div>
    </div>
  )
}
