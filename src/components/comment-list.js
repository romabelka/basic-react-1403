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
import withLocalization from '../l10n/with-localization'
import './comment-list.css'

function CommentList({ article, loadArticleComments, strings }) {
  const { isOpen, toggleOpen } = useToggler()
  useEffect(() => {
    if (!isOpen || article.commentsLoaded || article.commentsLoading) return
    loadArticleComments(article.id)
  }, [isOpen])

  const text = isOpen ? strings['hide.comments'] : strings['show.comments']
  return (
    <div>
      <button onClick={toggleOpen} className="test--comment-list__btn">
        {text}
      </button>
      <CSSTransition in={isOpen} classNames="comments-transition" timeout={500}>
        <div className="comments-transition">{getBody({ article, isOpen }, strings)}</div>
      </CSSTransition>
    </div>
  )
}

function getBody({ article: { comments, id, commentsLoaded, commentsLoading } }, strings) {
  if (commentsLoading || !commentsLoaded) return <Loader />

  const body =
    comments && comments.length ? (
      <ul>
        <TransitionGroup className="comment-list-transition">
          {comments.map((commentId) => (
            <CSSTransition
              key={commentId}
              timeout={500}
              classNames="comment-list-transition-comment"
            >
              <li key={commentId} className="test--comment-list__item">
                <Comment id={commentId} />
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>
    ) : (
      <h3 className="test--comment-list__empty">{strings['no.comments']}</h3>
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

export default connect(
  null,
  { loadArticleComments }
)(withLocalization(CommentList))
