import React, { useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Filters from './filters'
import Counter from './counter'
import ArticlesRoute from './routes/articles'
import CommentsRoute from './routes/comments'
import Menu, { MenuItem } from './menu'
import { Provider } from './contexts/user-context'
import LangProvider from './i18n/lang-provider'

function App() {
  const [username, setUsername] = useState('Roma')
  const [language, setLanguage] = useState('ru')

  const handleUserChange = (ev) => {
    const { value } = ev.target
    setUsername(value.length < 10 ? value : '')
  }

  return (
    <LangProvider language={language}>
      <>
        <Provider value={username}>
          <h1>Article App</h1>
          <ul>
            <li onClick={() => setLanguage('en')}>English</li>
            <li onClick={() => setLanguage('ru')}>Russian</li>
          </ul>
          <Menu>
            <MenuItem to="/comments" children={'Comments'} />
            <MenuItem to="/articles">Articles</MenuItem>
            <MenuItem to="/filters">Filters</MenuItem>
            <MenuItem to="/counter">Counter</MenuItem>
          </Menu>
          Username:{' '}
          <input
            type="text"
            value={username}
            onChange={handleUserChange}
            style={{
              color: username.length < 5 ? 'red' : 'black'
            }}
          />
        </Provider>
        <Switch>
          <Redirect from="/" exact to="/articles" />
          <Redirect from="/comments" exact to="/comments/1" />
          <Route path="/counter" component={Counter} exact />
          <Route path="/filters" component={Filters} />
          <Route path="/articles/new" render={() => <h1>New Article Form</h1>} />
          <Route path="/articles" component={ArticlesRoute} />
          <Route path="/comments" component={CommentsRoute} />
          <Route path="/error" render={() => <h1>Error</h1>} />
          <Route path="/" render={() => <h1>Not Found</h1>} />
        </Switch>
      </>
    </LangProvider>
  )
}

App.propTypes = {}

export default App
