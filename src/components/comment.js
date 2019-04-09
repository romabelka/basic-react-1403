import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createCommentSelector } from '../selectors'
import './comment.css'

function Comment({ comment }) {
  return (
    <div>
      {comment.text} <b>by {comment.user}</b>
    </div>
  )
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired
}

const createMapStateToProps = () => {
  const commentSelector = createCommentSelector()

  return (state, ownProps) => ({
    comment: commentSelector(state, ownProps)
  })
}

export default connect(createMapStateToProps)(Comment)
