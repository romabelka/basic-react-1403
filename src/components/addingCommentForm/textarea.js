import React from 'react'
import commentFormInputHook from '../../custom-hooks/commentFormInput'
import PropTypes from 'prop-types'
import TextInput from './textInput'

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

TextInput.propTypes = {
  validation: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired
}
