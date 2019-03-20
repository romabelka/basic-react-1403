import React from 'react'
import CommentList from './comment-list'

import useCommentTogle from '../custom-hooks/toggle-comments'

function Article({ isOpen, article, onBtnClick }) {
  const text = isOpen ? 'close' : 'open'
  const { isShowComments, toggleOpenItem } = useCommentTogle()
  return (
    <div>
      <h3>{article.title}</h3>
      <button onClick={onBtnClick}>{text}</button>
      {getBody({ isOpen, article, isShowComments, toggleOpenItem })}
    </div>
  )
}

function getBody({ isOpen, article, isShowComments, toggleOpenItem }) {
  const commentButtonText = isShowComments ? 'hide' : 'show'
  if (!isOpen) return null
  return (
    <div>
      <section>{article.text}</section>
      <button onClick={toggleOpenItem()}>{commentButtonText}</button>
      {getComments({ isShowComments, comments: article.comments })}
    </div>
  )
}

function getComments({ isShowComments, comments }) {
  if (!isShowComments) return null
  return <CommentList comments={comments} />
}

export default Article
