import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { commentsTotalSelector } from './../selectors'

function Paginator({ total }) {
  if (!total) return ''
  const links = []
  for (let z = 1; z * 5 <= total + 5; z++) {
    links.push(
      <NavLink to={'/comment/' + z} activeStyle={{ color: 'red' }}>
        {z}
      </NavLink>
    )
  }
  return (
    <ul>
      {links.map((link, item) => (
        <li key={item}>{link}</li>
      ))}
    </ul>
  )
}

export default connect((state) => ({
  total: commentsTotalSelector(state)
}))(Paginator)
