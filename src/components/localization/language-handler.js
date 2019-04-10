import React from 'react'
import LocalizedComponent from './localized-component-decorator'

function LanguageHandler({ onChangeLanguage }) {
  const onChangeHandler = (e) => {
    onChangeLanguage(e.target.value)
  }

  return (
    <div>
      Select language:
      <select onChange={onChangeHandler}>
        <option value="en">English</option>
        <option value="ru">Russian</option>
      </select>
    </div>
  )
}

export default LocalizedComponent(LanguageHandler)
