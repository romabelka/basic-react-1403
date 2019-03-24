import React from 'react'
import PropTypes from 'prop-types'

function Comment({ comment }) {
  return (
    <div className="test--comment_body">
      <div className="test--comment_text">{comment.text}</div>
      <div className="test--comment_user">
        <b>by {comment.user}</b>
      </div>
    </div>
  )
}

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired
  })
}

export default Comment
