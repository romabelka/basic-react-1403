import React, { useState } from 'react'
import CommentList from './comment-list'

function CommentHeader({ article }) {
  const [isOpen, setIsOpen] = useState(true)
  const text = !isOpen ? 'Close' : 'Open'
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>{text}</button>
      {getBody({ isOpen, article })}
    </div>
  )
}

function getBody({ isOpen, article }) {
  if (isOpen) return null
  return (
    <div>
      <CommentList comments={article.comments} />
    </div>
  )
}

export default CommentHeader
