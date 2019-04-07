import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comment from './comment'
import { connect } from 'react-redux'
import { pagesCommentsSelector } from '../selectors'
import { loadComments } from '../ac'
import Loader from './common/loader'

class CommentsListPage extends Component {
  componentDidUpdate(prevProps, prevState) {
    const { loadComments, commentIds, limit } = this.props

    if (!commentIds) {
      const page = parseInt(this.props.match.params.page)
      loadComments(limit, (page - 1) * limit)
    }
  }

  render() {
    const { commentIds } = this.props
    if (!commentIds) return <Loader />
    return (
      <div>
        <ul>{renderCommentsList(commentIds)}</ul>
      </div>
    )
  }
}

function renderCommentsList(commentIds) {
  return (
    commentIds &&
    commentIds.map((id) => (
      <li key={id}>
        <Comment id={id} />
      </li>
    ))
  )
}

CommentsListPage.propTypes = {
  commentIds: PropTypes.arrayOf(PropTypes.string),
  loadComments: PropTypes.func,
  limit: PropTypes.number
}
const mapStateToProp = () => {
  const pageSelector = pagesCommentsSelector()
  return (state, ownProps) => ({
    commentIds: pageSelector(state, ownProps)
    /* console.log(state)

    const page = parseInt(ownProps.match.params.page)
    console.log(page)
    const commentIds = state.comments.pages.get(page)
    console.log('commentIds', commentIds)
    return {
      commentIds
    } */
  })
}
const mapDispathToProp = { loadComments }
export default connect(
  mapStateToProp,
  mapDispathToProp
)(CommentsListPage)
