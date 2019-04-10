import React from 'react'

export default function LanguageSelector({ onLanguageChange }) {
  return (
    <div>
      <select
        onChange={(event) => {
          onLanguageChange(event.target.value)
        }}
      >
        <option value="en">English</option>
        <option value="ru">Russian</option>
      </select>
    </div>
  )
}
