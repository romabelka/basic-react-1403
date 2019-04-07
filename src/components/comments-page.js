import React, { useEffect } from 'react'
import Comment from './comment'
import { connect } from 'react-redux'
import { commentsPageSelector } from '../selectors'
import { loadComments } from '../ac'
import Loader from './common/loader'

function CommentsPage({ commentsPage, page, loadComments }) {
  useEffect(() => {
    !commentsPage && page && loadComments(page)
  }, [page])

  if (!commentsPage) return null
  if (commentsPage.loading) return <Loader />
  const comments = commentsPage.comments
  return comments && comments.length ? (
    <ul>
      {comments.map((commentId) => (
        <li key={commentId}>
          <Comment id={commentId} />
        </li>
      ))}
    </ul>
  ) : (
    <h3>No comments</h3>
  )
}

const mapStateToProps = (state, ownProps) => ({
  commentsPage: commentsPageSelector(state, ownProps)
})

export default connect(
  mapStateToProps,
  { loadComments }
)(CommentsPage)
