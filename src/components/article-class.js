import React, { Component } from 'react'
import CommentList from './comment-list'
import toggleComments from '../decorators/toggle-comments'

class Article extends Component {
  render() {
    const { isOpen, article, onBtnClick, isShowComments, toogleIsShowComments } = this.props
    const text = isOpen ? 'close' : 'open'

    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick={onBtnClick}>{text}</button>
        {this.getBody({ isOpen, article, isShowComments, toogleIsShowComments })}
      </div>
    )
  }

  getBody({ isOpen, article, isShowComments, toogleIsShowComments }) {
    const commentButtonText = isShowComments ? 'hide' : 'show'
    if (!isOpen) return null

    return (
      <div>
        <section>{article.text}</section>
        <button onClick={toogleIsShowComments()}>{commentButtonText}</button>
        {this.getComments({ isShowComments, comments: article.comments })}
      </div>
    )
  }

  getComments({ isShowComments, comments }) {
    if (!isShowComments) return null
    return <CommentList comments={comments} />
  }
}

export default toggleComments(Article)
