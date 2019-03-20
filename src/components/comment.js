import React, { useState } from 'react'
import commentHook from '../custom-hooks/comment'

export default function Comment({ userName, text }) {
  const { isOpen, toggle } = commentHook()

  return (
    <div>
      <h3>{userName}</h3>
      <button onClick={toggle}>show comment</button>
      {isOpen ? <p>{text}</p> : ''}
    </div>
  )
}
