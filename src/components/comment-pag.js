import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  commentPageSelector,
  commentPageCountSelector,
  commentPagLoadingSelector,
  commentPagLoadedSelector
} from '../selectors'
import { connect } from 'react-redux'
import { loadCommentPag } from '../ac'
import { NavLink } from 'react-router-dom'

const pageCountLimit = 5

function CommentPag({ pageNum, page, pageCount, loading, loaded, loadCommentPag }) {
  const [currentPage, setCurrentPage] = useState()
  useEffect(() => {
    if (!page && (pageNum === 0 || pageNum) && !loading) {
      loadCommentPag(pageNum, pageCountLimit)
    } else {
      setCurrentPage(pageNum)
    }
  })

  const commentsBody =
    loaded && page ? (
      <div>
        <ul>
          {page.toJS().map((comment) => (
            <li key={comment.id} className="test--comment-list__item">
              {comment.user}
            </li>
          ))}
        </ul>
      </div>
    ) : loading ? (
      <div>Загрузка...</div>
    ) : (
      ''
    )

  const pages = Array.apply(null, { length: pageCount }).map(Number.call, Number)
  const pageSelectorOptions = pages.map((i) => (
    <option key={i + 1} value={i + 1}>
      {i + 1}
    </option>
  ))

  const hanglePageSelect = (value) => {
    setCurrentPage(value.target.value)
  }

  return (
    <div>
      <NavLink to="/comment-pag/1">
        <button>|&lt;</button>
      </NavLink>
      <NavLink to={`/comment-pag/${currentPage - 1}`}>
        <button disabled={currentPage - 1 < 1}>&lt;</button>
      </NavLink>
      <NavLink to={`/comment-pag/${currentPage}`}>
        <select onChange={hanglePageSelect} value={currentPage}>
          {pageSelectorOptions}
        </select>
      </NavLink>
      <NavLink to={`/comment-pag/${currentPage + 1}`}>
        <button disabled={currentPage + 1 > pageCount}>></button>
      </NavLink>
      <NavLink to={`/comment-pag/${pageCount}`}>
        <button>>|</button>
      </NavLink>
      {commentsBody}
    </div>
  )
}

CommentPag.propTypes = {
  pageNum: PropTypes.number,
  loadCommentPag: PropTypes.func,
  pageCount: PropTypes.number
}

export default connect(
  (state, ownProps) => ({
    page: commentPageSelector(state, ownProps),
    pageCount: commentPageCountSelector(state, { limit: pageCountLimit }),
    loading: commentPagLoadingSelector(state),
    loaded: commentPagLoadedSelector(state)
  }),
  { loadCommentPag }
)(CommentPag)
