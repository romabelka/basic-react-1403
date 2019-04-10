import React, { useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Filters from './filters'
import Counter from './counter'
import ArticlesRoute from './routes/articles'
import CommentsRoute from './routes/comments'
import Menu, { MenuItem } from './menu'
import { Provider } from './contexts/user-context'
import { LanguageProvider, LanguageConsumer } from './contexts/language-context'
import { Vocabulary } from './words/vocabulary'

function App() {
  const [username, setUsername] = useState('Roma')
  const [language, setLanguage] = useState('Rus')

  const handleUserChange = (ev) => {
    const { value } = ev.target
    setUsername(value.length < 10 ? value : '')
  }

  const handleLanguageChange = () => {
    setLanguage(language === 'Rus' ? 'Eng' : 'Rus')
    //console.log(language)
  }

  return (
    <>
      <LanguageProvider value={{ language, Vocabulary }}>
        <Provider value={username}>
          <h1>Article App</h1>
          <button onClick={handleLanguageChange}>Change</button>
          <LanguageConsumer>
            {({ language, Vocabulary }) => (
              <Menu>
                <MenuItem to="/comments" children={Vocabulary[language].comments} />
                <MenuItem to="/articles">{Vocabulary[language].articles}</MenuItem>
                <MenuItem to="/filters">{Vocabulary[language].filters}</MenuItem>
                <MenuItem to="/counter">{Vocabulary[language].counter}</MenuItem>
              </Menu>
            )}
          </LanguageConsumer>
          {Vocabulary[language].username}:{' '}
          <input
            type="text"
            value={username}
            onChange={handleUserChange}
            style={{
              color: username.length < 5 ? 'red' : 'black'
            }}
          />
        </Provider>
      </LanguageProvider>
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
