import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { connect } from 'react-redux'
import Comment from './comment'
import useToggler from '../custom-hooks/toggle-open'
import CommentForm from './comment-form'
import { loadArticleComments } from '../ac'
import Loader from './common/loader'
import { Consumer } from './contexts/user-context'
import { TranslationConsumer } from './contexts/translation-context'

import './comment-list.css'

function CommentList({ article, loadArticleComments }) {
  const { isOpen, toggleOpen } = useToggler()
  useEffect(() => {
    if (!isOpen || article.commentsLoaded || article.commentsLoading) return
    loadArticleComments(article.id)
  }, [isOpen])

  return (
    <div>
      <button onClick={toggleOpen} className="test--comment-list__btn">
        <TranslationConsumer>
          {(lang) => (isOpen ? lang.comments.hide : lang.comments.show)}
        </TranslationConsumer>
      </button>
      <CSSTransition in={isOpen} classNames="comments-transition" timeout={5000}>
        <div className="comments-transition">{getBody({ article, isOpen })}</div>
      </CSSTransition>
    </div>
  )
}

function getBody({ article: { comments, id, commentsLoaded, commentsLoading } }) {
  if (commentsLoading || !commentsLoaded) return <Loader />

  return (
    <div className="test--comment-list__body">
      {comments && comments.length ? (
        <TransitionGroup>
          {comments.map((commentId) => (
            <CSSTransition key={commentId} timeout={1500} classNames="comment">
              <div key={commentId}>
                <Comment id={commentId} />
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      ) : (
        <h3 className="test--comment-list__empty">No comments yet</h3>
      )}
      <Consumer>{(username) => <h3>{username}</h3>}</Consumer>
      <CommentForm articleId={id} />
    </div>
  )
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
  { loadArticleComments }
)(CommentList)
