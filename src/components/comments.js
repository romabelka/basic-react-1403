import React, { useEffect, useState } from 'react'
import {
  commentsPageSelector,
  commentsPageCountSelector,
  commentsLoadingSelector,
  commentsLoadedSelector
} from '../selectors'
import { connect } from 'react-redux'
import { loadComments } from '../ac'
import { NavLink } from 'react-router-dom'
import Loader from './common/loader'

const pageNumberLimit = 5

function Comments({ pageNum, page, pageCount, loading, loaded, loadComments }) {
  const [currentPage, setCurrentPage] = useState()
  useEffect(() => {
    if (!page && (pageNum === 0 || pageNum) && !loading) {
      loadComments(pageNum, pageNumberLimit)
    } else {
      setCurrentPage(pageNum)
    }
  })

  const commentsBody =
    loaded && page ? (
      <div>
        <ul>
          {page.toJS().map((comment) => (
            <li key={comment.id}>{comment.user}</li>
          ))}
        </ul>
      </div>
    ) : loading ? (
      <Loader />
    ) : (
      ''
    )

  const pages = Array.apply(null, { length: pageCount }).map(Number.call, Number)
  const pageSelectorOptions = pages.map((i) => (
    <option key={i + 1} value={i + 1}>
      {i + 1}
    </option>
  ))

  const pageSelection = (value) => {
    setCurrentPage(value.target.value)
  }

  return (
    <div>
      <ul>
        <li>
          <NavLink to="/comments/1">
            <button>First</button>
          </NavLink>
        </li>
        <li>
          <NavLink to={`/comments/${currentPage - 1}`}>
            <button disabled={currentPage - 1 < 1}>Previous</button>
          </NavLink>
        </li>
        <li>
          <NavLink to={`/comments/${currentPage + 1}`}>
            <button disabled={currentPage + 1 > pageCount}>Next</button>
          </NavLink>
        </li>
        <li>
          <NavLink to={`/comments/${pageCount}`}>
            <button>Last</button>
          </NavLink>
        </li>
      </ul>
      <NavLink to={`/comments/${currentPage}`}>
        <select onChange={pageSelection} value={currentPage}>
          {pageSelectorOptions}
        </select>
      </NavLink>
      {commentsBody}
    </div>
  )
}

export default connect(
  (state, ownProps) => ({
    page: commentsPageSelector(state, ownProps),
    pageCount: commentsPageCountSelector(state, { limit: pageNumberLimit }),
    loading: commentsLoadingSelector(state),
    loaded: commentsLoadedSelector(state)
  }),
  { loadComments }
)(Comments)
