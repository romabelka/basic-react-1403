import React from 'react'

export default function Language({ handleClick }) {
  return (
    <ul style={{ float: 'right', listStyle: 'none', cursor: 'pointer' }}>
      <li onClick={handleClick}>ru</li>
      <li onClick={handleClick}>eng</li>
    </ul>
  )
}
