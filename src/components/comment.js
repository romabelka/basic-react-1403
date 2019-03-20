import React from 'react'

export default function Comment({ userName, text }) {
  return (
    <div>
      <h3>{userName}</h3>
      <p>{text}</p>
    </div>
  )
}
