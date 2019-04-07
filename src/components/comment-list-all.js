import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadAllComments } from '../ac'
import { commentsListSelector } from '../selectors'
import CommentListAllPager from './comment-list-all-pager'
import Loader from './common/loader'

function CommentListAll({
  pageData: { loaded, loading, comments },
  match: {
    params: { page }
  },
  loadAllComments
}) {
  useEffect(() => {
    !loaded && loadAllComments(page)
  }, [page])

  if (loading) {
    return <Loader />
  }

  return (
    <div>
      {comments ? (
        <ul>
          {comments.map((comment) => (
            <li key={comment.id} className="test--comment-list__item">
              <div>
                {comment.text} <b>by {comment.user}</b>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <h3 className="test--comment-list__empty">No comments yet</h3>
      )}
      <CommentListAllPager />
    </div>
  )
}

CommentListAll.propTypes = {
  comments: PropTypes.array
}

export default connect(
  (state, ownProps) => ({
    pageData: commentsListSelector(state, ownProps)
  }),
  { loadAllComments }
)(CommentListAll)
