import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Comment from './comment'
import useToggler from '../custom-hooks/toggle-open'
import CommentForm from './comment-form'
import { loadComments } from '../ac'
import Loader from './common/loader'

function CommentList({ article, loadComments }) {
  useEffect(() => {
    console.log('88', article.commentsLoading)
    console.log('88', article.commentsLoaded)
    if (article.commentsLoading || article.commentsLoaded) return

    console.log(1212)
    loadComments(article.id)
  }, [article.commentsLoading, article.commentsLoaded])

  const { isOpen, toggleOpen } = useToggler()
  const text = isOpen ? 'hide comments' : 'show comments'

  return (
    <div>
      <button onClick={toggleOpen} className="test--comment-list__btn">
        {text}
      </button>
      {getBody({ article, isOpen })}
    </div>
  )
}

function getBody({ article: { comments, id, commentsLoading }, isOpen }) {
  console.log(9)
  if (!isOpen) return null
  console.log(19)
  if (commentsLoading) return <Loader />

  console.log(4343)

  const body =
    comments && comments.length ? (
      <ul>
        {comments.map((commentId) => (
          <li key={commentId} className="test--comment-list__item">
            <Comment id={commentId} />
          </li>
        ))}
      </ul>
    ) : (
      <h3 className="test--comment-list__empty">No comments yet</h3>
    )

  return (
    <div className="test--comment-list__body">
      {body}
      <CommentForm articleId={id} />
    </div>
  )
}

// CommentList.propTypes = {
//   comments: PropTypes.array
// }

/*
CommentList.defaultProps = {
  comments: [],
  defaultOpen: true
}
*/

// export default CommentList

export default connect(
  null,
  { loadComments }
)(CommentList)
