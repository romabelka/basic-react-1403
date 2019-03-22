import React from 'react'
import PropTypes from 'prop-types'
function Comment({ comment }) {
  return (
    <div>
      {comment.text} <b>by {comment.user}</b>
    </div>
  )
}
Comment.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired
}
export default Comment
