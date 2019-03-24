import React, { useState } from 'react'

function CommentAdd() {
  const [user, setUsername] = useState('')
  const [text, setText] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const onSubmit = () => {
    const errors = []
    if (!user) {
      errors.push('Поле user не заполнено')
    }
    if (!text) {
      errors.push('Поле text не заполнено')
    }
    if (user && user.length > 20) {
      errors.push('Слишком длинное имя пользователя')
    }
    if (text && text.length > 100) {
      errors.push('Слишком длинный комментарий')
    }
    setErrorMessage(errors.join('; '))
  }

  const handleUserChange = (ev) => {
    const { value } = ev.target
    setUsername(value)
  }

  const handleTextChange = (ev) => {
    const { value } = ev.target
    setText(value)
  }

  const formItemStyle = { display: 'block', margin: '8px' }

  return (
    <div style={{ margin: '16px' }}>
      <input type="text" value={user} onChange={handleUserChange} style={{ ...formItemStyle }} />
      <input type="text" value={text} onChange={handleTextChange} style={{ ...formItemStyle }} />
      <button onClick={onSubmit} style={{ ...formItemStyle }}>
        add Comment
      </button>
      <div
        style={{
          background: 'red',
          width: '160px',
          color: 'white',
          ...formItemStyle
        }}
      >
        {errorMessage}
      </div>
    </div>
  )
}

CommentAdd.propTypes = {}

export default CommentAdd
