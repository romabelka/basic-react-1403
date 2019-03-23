import React from 'react'

export default function Submit({ disabled }) {
  return (
    <input
      type="submit"
      value="Комментировать"
      style={{ marginTop: '0.5rem' }}
      disabled={disabled}
    />
  )
}
