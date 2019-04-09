import React, { useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Filters from './filters'
import Counter from './counter'
import ArticlesRoute from './routes/articles'
import CommentsRoute from './routes/comments'
import Menu, { MenuItem } from './menu'
import { Provider } from './contexts/user-context'
import LocalizationContextProvider from '../l10n/localization-context-provider'
import LocalizedApp from './localized-app'
function App() {
  const [username, setUsername] = useState('Roma')

  const handleUserChange = (ev) => {
    const { value } = ev.target
    setUsername(value.length < 10 ? value : '')
  }

  return (
    <>
      <LocalizationContextProvider locale="ru">
        <LocalizedApp />
      </LocalizationContextProvider>
    </>
  )
}

App.propTypes = {}

export default App
