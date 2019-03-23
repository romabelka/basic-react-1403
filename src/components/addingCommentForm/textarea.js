import React, { useState } from 'react'
import commentFormInputHook from '../../custom-hooks/commentFormInput'

export default function Textarea({ className, placeholder, validation }) {
  const [text, handleInputChange] = commentFormInputHook()

  const preg = /[@,$,%]/
  const isValid = !preg.test(text)

  isValid ? validation(true) : validation(false)

  return (
    <textarea
      className={className}
      placeholder={placeholder}
      onChange={handleInputChange}
      value={text}
      style={{ color: isValid ? 'black' : 'red' }}
    />
  )
}
