import React from 'react'
import { NavLink } from 'react-router-dom'

function Paginator({ totalPages, url }) {
  const getBody = () => {
    let pageElemets = []
    for (let i = 1; i <= totalPages; i++) {
      pageElemets.push(
        <li key={i}>
          <NavLink to={`${url}/${i}`} activeStyle={{ color: 'red' }}>
            {i}
          </NavLink>
        </li>
      )
    }
    return pageElemets
  }

  return <ul>{getBody()}</ul>
}

export default Paginator
