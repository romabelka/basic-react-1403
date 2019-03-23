import React, { useState } from 'react'
import SingleTextInput from './textInput'
import SingleTextarea from './textarea'
import SubmitBtn from './submit'
import './style.css'

export default function AddingCommentForm() {
  const [textInputIsValid, setInputState] = useState(false)
  const setTextInputValidity = (isValid) => {
    setInputState(isValid)
  }

  const [textAreaIsValid, setTextareaState] = useState(true)
  const setTextareaValidity = (isValid) => {
    setTextareaState(isValid)
  }

  const formIsValid = textInputIsValid && textAreaIsValid

  return (
    <form id="validId" method="POST">
      <h3>Форма добавления комментария:</h3>
      <SingleTextInput
        validation={setTextInputValidity}
        className="form__item"
        placeholder="Ваше имя"
        name="user"
      />
      <SingleTextarea
        validation={setTextareaValidity}
        className="form__item"
        placeholder="Сообщение"
        name="message"
      />
      <SubmitBtn disabled={!formIsValid && '0'} />
    </form>
  )
}
