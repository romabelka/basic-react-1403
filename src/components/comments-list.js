import React from 'react'
import Comment from './comment'
import useAccordion from '../custom-hooks/accordion'

const CommentsList = ({ comments }) => {
  const { openItemId, toggleOpenItem } = useAccordion()

  if (!comments) {
    return null
  }

  const CommentItem = comments.map((comment) => {
    if (!comment) {
      return null
    }

    return (
      <li key={comment.id}>
        <Comment
          comment={comment}
          isOpen={comment.id === openItemId}
          onBtnClick={toggleOpenItem(comment.id)}
        />
      </li>
    )
  })

  return <ul>{CommentItem}</ul>
}

export default CommentsList
