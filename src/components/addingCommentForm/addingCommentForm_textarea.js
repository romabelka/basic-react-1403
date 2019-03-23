import React, { useState } from 'react'

export default function AddingCommentForm_textarea({ className, placeholder }) {
  const [text, setUsername] = useState('')

  const preg = /[@,$,%]/

  const handleInputChange = (ent) => {
    let { value } = ent.target
    setUsername(value)
  }
  return (
    <textarea
      className={className}
      placeholder={placeholder}
      onChange={handleInputChange}
      value={text}
      style={{ color: preg.test(text) ? 'red' : 'black' }}
    />
  )
}
