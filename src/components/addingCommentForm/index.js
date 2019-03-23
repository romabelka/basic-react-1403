import React, { useState } from 'react'
import SingleTextInput from './textInput'
import SingleTextarea from './textarea'
import SubmitBtn from './submit'
import commentFormValidationHook from '../../custom-hooks/commentFormValidationHook'
import './style.css'

export default function AddingCommentForm() {
  const [textInputIsValid, setTextInputValidity] = commentFormValidationHook()

  const [textAreaIsValid, setTextareaValidity] = commentFormValidationHook()

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
