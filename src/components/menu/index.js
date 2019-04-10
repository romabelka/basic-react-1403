import React from 'react'
import MenuItem from './menu-item'
import { Consumer } from '../contexts/user-context'

function Menu({ children }) {
  return (
    <div>
      <h2>Main Menu</h2>
      <nav>{children}</nav>
      <Consumer>{(username) => <h3>{username}</h3>}</Consumer>
    </div>
  )
}

Menu.propTypes = {}

export { MenuItem }
export default Menu
