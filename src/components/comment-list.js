import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Comment from './comment'
import useToggler from '../custom-hooks/toggle-open'
import CommentForm from './comment-form'
import { loadComments } from '../ac'
import { connect } from 'react-redux'
import Loader from './common/loader'

function CommentList({ article, loadComments }) {
  const { isOpen, toggleOpen } = useToggler()

  useEffect(() => {
    isOpen && !article.commentsLoaded && loadComments(article.id)
  }, [isOpen])

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

function getBody({ article: { comments, id, commentsLoading, commentsLoaded }, isOpen }) {
  if (!isOpen) return null
  if (commentsLoading) return <Loader />
  if (commentsLoaded) {
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
  return <></>
}

CommentList.propTypes = {
  comments: PropTypes.array
}

/*
CommentList.defaultProps = {
  comments: [],
  defaultOpen: true
}
*/

export default connect(
  null,
  { loadComments }
)(CommentList)
