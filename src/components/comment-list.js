import React from 'react'
import Comment from './comment'
import useAccordion from '../custom-hooks/accordion'

function CommentList({ comments }) {
  const { openItemId, toggleOpenItem } = useAccordion()

  const commentItems = comments.map((comment) => (
    <li key={comment.id}>
      <Comment
        comment={comment}
        isOpen={comment.id === openItemId}
        onBtnClick={toggleOpenItem(comment.id)}
      />
    </li>
  ))

  return <ul>{commentItems}</ul>
}
export default CommentList
