import React from 'react'
import MenuItem from './menu-item'

function Menu({ children }) {
  return (
    <div>
      <h2>Main Menu</h2>
      <nav>{children}</nav>
    </div>
  )
}

Menu.propTypes = {}

export { MenuItem }
export default Menu
