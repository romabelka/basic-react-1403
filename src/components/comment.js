import React from 'react'
import pt from 'prop-types'

function Comment({ comment }) {
  return (
    <div>
      {comment.text} <b>by {comment.user}</b>
    </div>
  )
}

Comment.propTypes = { comment: pt.object.isRequired }

export default Comment
