import React from 'react'
import PropTypes from 'prop-types'

function Comment(props) {
  const { comment } = props
  return (
    <div>
      {comment.text} <b>by {comment.user}</b>
    </div>
  )
}

Comment.propTypes = {
  comment: PropTypes.shape({}).isRequired
}

export default Comment
