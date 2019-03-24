import React, { useState } from 'react'

function AddComment() {
  const [username, setUsername] = useState('')
  const [message, setMessage] = useState('')
  const [isUsernameValid, setUsernameValidation] = useState()
  const [isMessageValid, setMessageValidation] = useState()

  function handlerUserChange(ev) {
    const { value } = ev.target

    setUsername(value)
    setUsernameValidation(value.length && value.length > 3)
  }

  function handlerTextChange(ev) {
    const { value } = ev.target

    setMessage(value)
    setMessageValidation(value.length && value.length > 10)
  }

  return (
    <form>
      <input
        type="text"
        value={username}
        onChange={handlerUserChange}
        style={{
          color: !isUsernameValid && 'red',
          borderColor: !isUsernameValid && 'red'
        }}
      />
      <textarea
        value={message}
        cols="30"
        rows="4"
        onChange={handlerTextChange}
        style={{
          color: !isUsernameValid && 'red',
          borderColor: !isMessageValid && 'red'
        }}
      />
      <button>add comment</button>
    </form>
  )
}

export default AddComment
