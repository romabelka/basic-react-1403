import React from 'react'
import PropTypes from 'prop-types'
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

TextInput.propTypes = {
  validation: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired
}
