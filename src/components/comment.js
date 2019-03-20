import React from 'react'

function Comment({ user, text }) {
  return (
    <div>
      <h5>{user}</h5>
      <section>{text}</section>
    </div>
  )
}

export default Comment
