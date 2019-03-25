import React, { useState } from 'react'

function CommentAdd() {
  const defaultValidationResult = { backgroundColor: 'white' }

  const [comment, setComment] = useState('')
  const [username, setUsername] = useState('')

  const validate = (val) => {
    return val ? defaultValidationResult : { backgroundColor: 'orange' }
  }

  const handleUserChange = (ev) => {
    const { value } = ev.target
    setUsername(value)
  }

  const handleCommentChange = (ev) => {
    const { value } = ev.target
    setComment(value)
  }

  const addCommentBtnEnabled = () => {
    return comment && username && comment.length > 0 && username.length > 0
  }

  return (
    <div style={{ margin: '30px' }}>
      <div>
        <label>Username</label>
        <input
          name="username"
          type="text"
          value={username}
          onChange={handleUserChange}
          style={validate(username)}
        />
      </div>
      <div>
        <label>Comment</label>
        <textarea
          name="comment"
          value={comment}
          cols={40}
          rows={5}
          onChange={handleCommentChange}
          style={validate(comment)}
        />
      </div>
      <div>
        <input
          type="button"
          value="Add comment"
          onClick={() => console.log('Commend add')}
          {...(addCommentBtnEnabled() ? {} : { disabled: true })}
        />
      </div>
    </div>
  )
}

export default CommentAdd
