import React, { useEffect } from 'react'
import { commentsPaginatorSelector } from '../selectors'
import { loadCommentsPaginator } from '../ac'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

function CommentsPaginator({ page, commentsPage, loadCommentsPaginator }) {
  useEffect(() => {
    loadCommentsPaginator(page)
  }, [page])

  console.log(commentsPage)
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
