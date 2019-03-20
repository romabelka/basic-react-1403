import React from 'react'
import useToggler from '../custom-hooks/toggler'
import Comment from './comment'

function CommentListWithHooks({ comments }) {
  const { isOpen, toggleOpen } = useToggler()
  const getComments = () =>
    comments.map((comment) => {
      return (
        <li key={comment.id}>
          <Comment comment={comment} />
        </li>
      )
    })

  const getList = (isOpen) => {
    if (!isOpen) return null
    return <ul>{getComments()}</ul>
  }

  const text = (isOpen ? 'close' : 'open') + ' comments'
  return (
    <>
      <button onClick={toggleOpen}>{text}</button>
      {getList(isOpen)}
    </>
  )
}

export default CommentListWithHooks
