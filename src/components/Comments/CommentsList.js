import React from 'react'
import Comment from './Comment'
import AccordionDecorator from '../../decorators/accordion'

const CommentsList = ({ comments, openItemId, toggleOpenItem }) => (
  <ul>
    {comments.map((comment) => (
      <li key={comment.id}>
        <Comment
          comment={comment}
          isOpen={comment.id === openItemId}
          onBtnClick={toggleOpenItem(comment.id)}
        />
      </li>
    ))}
  </ul>
)

export default AccordionDecorator(CommentsList)
