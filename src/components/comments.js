import React from 'react'
import useAccordion from '../custom-hooks/accordion'

function Comments({ article, isOpened }) {
  if (!article.comments) {
    return null
  }
  const { openItemId, toggleOpenItem } = useAccordion()

  return (
    <>
      <p>Comments:</p>
      <button onClick={toggleOpenItem(article.id, article.id === openItemId)}>
        {openItemId ? 'Hide comments' : 'Show Comments'}
      </button>
      <CommentsList comments={article.comments} isOpened={openItemId} />
    </>
  )
}

function CommentsList({ comments, isOpened }) {
  if (!isOpened) {
    return null
  }
  return comments.map((comment) => (
    <div key={comment.id}>
      <p>
        <b>{comment.user}</b>
      </p>
      <p>{comment.text}</p>
    </div>
  ))
}

export default Comments
