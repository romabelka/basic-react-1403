import React, { useState } from 'react'

function AddComment() {
  const [username, setUsername] = useState('')
  const [message, setMessage] = useState('')

  function handlerUserChange(ev) {
    const { value } = ev.target

    setUsername(value)
  }

  function handlerTextChange(ev) {
    const { value } = ev.target

    setMessage(value)
  }

  return (
    <form>
      <input
        type="text"
        value={username}
        onChange={handlerUserChange}
        style={{
          color: username.length && username.length < 3 && 'red',
          borderColor: username.length && username.length < 3 && 'red'
        }}
      />
      <textarea
        value={message}
        cols="30"
        rows="4"
        onChange={handlerTextChange}
        style={{
          color: message.length && message.length < 10 && 'red',
          borderColor: message.length && message.length < 10 && 'red'
        }}
      />
      <button>add comment</button>
    </form>
  )
}

export default AddComment
