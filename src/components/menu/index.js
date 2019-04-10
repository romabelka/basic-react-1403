import React from 'react'
import MenuItem from './menu-item'
import { Consumer } from '../contexts/user-context'
import { TranslationConsumer } from '../contexts/translation-context'

function Menu({ children }) {
  return (
    <div>
      <h2>
        <TranslationConsumer>{(lang) => lang.mainMenu}</TranslationConsumer>
      </h2>
      <nav>{children}</nav>
      <Consumer>{(username) => <h3>{username}</h3>}</Consumer>
    </div>
  )
}

Menu.propTypes = {}

export { MenuItem }
export default Menu
