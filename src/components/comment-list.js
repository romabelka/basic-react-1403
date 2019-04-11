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
import i18n from './i18n'
import './comment-list.css'

function CommentList({ article, loadArticleComments, t }) {
  const { isOpen, toggleOpen } = useToggler()
  useEffect(() => {
    if (!isOpen || article.commentsLoaded || article.commentsLoading) return
    loadArticleComments(article.id)
  }, [isOpen])

  const text = isOpen ? 'hide comments' : 'show comments'
  return (
    <div>
      <button onClick={toggleOpen} className="test--comment-list__btn">
        {t(text)}
      </button>
      <CSSTransition in={isOpen} classNames="comments-transition" timeout={5000}>
        <div className="comments-transition">{getBody({ article, isOpen, t })}</div>
      </CSSTransition>
    </div>
  )
}

function getBody({ article: { comments, id, commentsLoaded, commentsLoading }, t }) {
  if (commentsLoading || !commentsLoaded) return <Loader />

  const body =
    comments && comments.length ? (
      <ul>
        <TransitionGroup>
          {comments.map((commentId) => (
            <CSSTransition key={commentId} timeout={500} classNames="comment">
              <li key={commentId} className="test--comment-list__item">
                <Comment id={commentId} />
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>
    ) : (
      <h3 className="test--comment-list__empty">{t('No comments yet')}</h3>
    )

  return (
    <div className="test--comment-list__body">
      {body}
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

export default i18n(
  connect(
    null,
    { loadArticleComments }
  )(CommentList)
)
