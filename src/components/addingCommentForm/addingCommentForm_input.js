import React, { useState } from 'react'

export default function AddingCommentForm_input({ className, placeholder }) {
  const [username, setUsername] = useState('')

  const handleInputChange = (ent) => {
    let { value } = ent.target
    setUsername(value)
  }

  return (
    <input
      type="text"
      className={className}
      placeholder={placeholder}
      onChange={handleInputChange}
      value={username}
      style={{ color: username.length < 4 ? 'red' : 'black' }}
    />
  )
}
