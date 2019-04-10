import React, { useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Filters from './filters'
import Counter from './counter'
import ArticlesRoute from './routes/articles'
import CommentsRoute from './routes/comments'
import Menu, { MenuItem } from './menu'
import { Provider } from './contexts/user-context'
import LanguageHandler from './localization/language-handler'
import LocalizedComponent from './localization/localized-component-decorator'

function App({ dictionary }) {
  const [username, setUsername] = useState('Roma')

  const handleUserChange = (ev) => {
    const { value } = ev.target
    setUsername(value.length < 10 ? value : '')
  }

  return (
    <>
      <Provider value={username}>
        <LanguageHandler />
        <h1>{dictionary['article.app']}</h1>
        <Menu>
          <MenuItem to="/comments" children={dictionary['comments']} />
          <MenuItem to="/articles">{dictionary['articles']}</MenuItem>
          <MenuItem to="/filters">{dictionary['filters']}</MenuItem>
          <MenuItem to="/counter">{dictionary['counter']}</MenuItem>
        </Menu>
        {dictionary['username']}:{' '}
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
        <Route path="/error" render={() => <h1>{dictionary['error']}</h1>} />
        <Route path="/" render={() => <h1>{dictionary['not.found']}</h1>} />
      </Switch>
    </>
  )
}

App.propTypes = {}

export default LocalizedComponent(App)
