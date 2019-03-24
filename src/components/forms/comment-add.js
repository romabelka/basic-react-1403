import React, { useState } from 'react'

function CommentAdd() {
  const defaultValidationResult = { backgroundColor: 'white' }

  const [comment, setComment] = useState('')
  const [username, setUsername] = useState('')
  const [userValidationResult, setUserValidation] = useState(defaultValidationResult)
  const [commentValidationResult, setCommentValidation] = useState(defaultValidationResult)

  const validate = (val, setValidationResultFunc) => {
    const validationResult = val ? defaultValidationResult : { backgroundColor: 'orange' }
    setValidationResultFunc(validationResult)
  }

  const handleUserChange = (ev) => {
    const { value } = ev.target
    setUsername(value)
    validate(value, setUserValidation)
  }

  const handleCommentChange = (ev) => {
    const { value } = ev.target
    setComment(value)
    validate(value, setCommentValidation)
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
          style={userValidationResult}
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
          style={commentValidationResult}
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
