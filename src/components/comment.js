import React, { useState } from 'react'

export default function Comment({ userName, text }) {
  const [isOpen, setState] = useState(false)

  const toggle = () => setState(!isOpen)

  return (
    <div>
      <h3>{userName}</h3>
      <button onClick={toggle}>show comment</button>
      {isOpen ? <p>{text}</p> : ''}
    </div>
  )
}
