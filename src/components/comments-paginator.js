import React, { useEffect } from 'react'
import { commentsPaginatorSelector } from '../selectors'
import { loadCommentsPaginator } from '../ac'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Loader from './common/loader'

function CommentsPaginator({ page, commentsPage, loadCommentsPaginator }) {
  useEffect(() => {
    if (commentsPage && commentsPage.loaded) return
    loadCommentsPaginator(page)
  }, [page])
  console.log(commentsPage)

  if (commentsPage && commentsPage.loading) return <Loader />
  return (
    <div>
      <ul>
        {commentsPage
          ? commentsPage.comments.map((comment) => (
              <li key={comment.id}>
                <p>
                  {comment.text} <b>{comment.user}</b>
                </p>
              </li>
            ))
          : ''}
      </ul>
    </div>
  )
}

CommentsPaginator.propTypes = {
  page: PropTypes.number.isRequired
}

export default connect(
  (state, ownProps) => ({
    commentsPage: commentsPaginatorSelector(state, ownProps)
  }),
  { loadCommentsPaginator }
)(CommentsPaginator)
