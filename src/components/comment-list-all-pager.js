import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { commentsTotalCount } from '../selectors'
import { NavLink } from 'react-router-dom'
import { COMMENT_ITEMS_ON_PAGE } from '../constants'

function CommentListAllPager({ totalCount }) {
  const pages = totalCount / COMMENT_ITEMS_ON_PAGE
  const pagerItems = []

  for (let i = 0; i < pages; i++) {
    const pageNumber = i + 1
    pagerItems.push(
      <span key={pageNumber} style={{ paddingRight: 20 }}>
        <NavLink to={`/comments/${pageNumber}`} activeStyle={{ color: 'red' }}>
          {pageNumber}
        </NavLink>
      </span>
    )
  }

  return <div>{pagerItems}</div>
}

CommentListAllPager.propTypes = {
  totalCount: PropTypes.number
}

export default connect(
  (state) => ({
    totalCount: commentsTotalCount(state)
  }),
  null
)(CommentListAllPager)
