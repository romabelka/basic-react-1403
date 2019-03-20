import React from 'react'
import useToggler from '../custom-hooks/toggler'
import Comment from './comment'

export default function CommentList({ comments }) {
  const { isOpen, toggleOpen } = useToggler()

  const commentList = isOpen
    ? comments &&
      comments.map((item) => (
        <li key={item.id}>
          <Comment {...item} />
        </li>
      ))
    : null

  return (
    <div>
      <button onClick={toggleOpen}>{isOpen ? 'Close comments' : 'Open comments'}</button>
      <ul>{commentList}</ul>
    </div>
  )
}
