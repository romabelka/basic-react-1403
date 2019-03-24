import React from 'react'
import PropTypes from 'prop-types'

function Comment({ comment }) {
  return (
    <div className="test--comment__body">
      {comment.text} <b>by {comment.user}</b>
    </div>
  )
}

Comment.propTypes = {
  comment: PropTypes.shape({
    user: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
}

export default Comment
