import React from 'react'
import SingleTextInput from './addingCommentForm_input'
import SingleTextarea from './addingCommentForm_textarea'
import './style.css'

export default function AddingCommentForm() {
  return (
    <form id="validId">
      <h3>Форма добавления комментария:</h3>
      <SingleTextInput className="form__item" placeholder="Ваше имя" name="user" />
      <SingleTextarea className="form__item" placeholder="Сообщение" name="message" />
      <input type="button" value="Комментировать" style={{ 'margin-top': '0.5rem' }} />
    </form>
  )
}
