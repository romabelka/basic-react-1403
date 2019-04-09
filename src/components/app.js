import React, { useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Filters from './filters'
import Counter from './counter'
import ArticlesRoute from './routes/articles'
import CommentsRoute from './routes/comments'
import Menu, { MenuItem } from './menu'
import { Provider } from './contexts/user-context'
import { LangProvider, LangConsumer } from './contexts/lang-context'
import Language from './language'
import { interLib } from '../lib/interLibDict'

function App() {
  const [username, setUsername] = useState('Roma')
  const [lang, setLang] = useState('ru')

  const handleUserChange = (ev) => {
    const { value } = ev.target
    setUsername(value.length < 10 ? value : '')
  }

  const handleLangChange = (elem) => {
    const { textContent } = elem.target
    if (textContent !== lang) setLang(textContent)
  }

  return (
    <>
      <LangProvider value={{ lang, interLib }}>
        <Provider value={username}>
          <Language handleClick={handleLangChange} />
          <h1>Article App</h1>
          <Menu>
            <LangConsumer>
              {({ lang, interLib }) => (
                <div>
                  <MenuItem to="/comments">{interLib[lang].comments}</MenuItem>
                  <MenuItem to="/articles">{interLib[lang].articles}</MenuItem>
                  <MenuItem to="/filters">{interLib[lang].filters}</MenuItem>
                  <MenuItem to="/counter">{interLib[lang].counter}</MenuItem>
                </div>
              )}
            </LangConsumer>
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
      </LangProvider>
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
  )
}

App.propTypes = {}

export default App
