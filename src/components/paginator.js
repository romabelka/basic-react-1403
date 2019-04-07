import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

Paginator.propTypes = {
  pageLimitCount: PropTypes.number,
  totalRecordsCount: PropTypes.number,
  path: PropTypes.string
}

export default function Paginator({ pageLimitCount, totalRecordsCount, path }) {
  const pagesCount = Math.ceil(totalRecordsCount / pageLimitCount)

  const links = []
  for (let i = 0; i < pagesCount; ++i) {
    links.push(
      <li key={i}>
        <NavLink to={`${path}/${i + 1}`} activeStyle={{ color: 'red' }}>
          {i + 1}
        </NavLink>
      </li>
    )
  }

  return <ul>{links}</ul>
}
