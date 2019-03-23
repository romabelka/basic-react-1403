import React, { useState } from 'react'
import commentFormInputHook from '../../custom-hooks/commentFormInput'

export default function TextInput({ className, placeholder, validation }) {
  const [username, handleInputChange] = commentFormInputHook()

  const isValid = username.length >= 4
  isValid ? validation(true) : validation(false)

  return (
    <input
      type="text"
      className={className}
      placeholder={placeholder}
      onChange={handleInputChange}
      value={username}
      style={{ color: isValid ? 'black' : 'red' }}
    />
  )
}
