import React, { useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Filters from './filters'
import Counter from './counter'
import ArticlesRoute from './routes/articles'
import CommentsRoute from './routes/comments'
import Menu, { MenuItem } from './menu'
import { Provider } from './contexts/user-context'
import withLocalization from '../l10n/with-localization'
import LanguageButtons from './language-buttons'

function LocalizedApp({ strings }) {
  const [username, setUsername] = useState('Roma')

  const handleUserChange = (ev) => {
    const { value } = ev.target
    setUsername(value.length < 10 ? value : '')
  }

  return (
    <>
      <LanguageButtons />
      <Provider value={username}>
        <h1>Article App</h1>
        <Menu>
          <MenuItem to="/comments" children={strings['comments']} />
          <MenuItem to="/articles">{strings['articles']}</MenuItem>
          <MenuItem to="/filters">{strings['filters']}</MenuItem>
          <MenuItem to="/counter">{strings['counter']}</MenuItem>
        </Menu>
        {strings['username']}:{' '}
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
        <Route path="/articles/new" render={() => <h1>{strings['new.article.form']}</h1>} />
        <Route path="/articles" component={ArticlesRoute} />
        <Route path="/comments" component={CommentsRoute} />
        <Route path="/error" render={() => <h1>{strings['error']}</h1>} />
        <Route path="/" render={() => <h1>{strings['not.found']}</h1>} />
      </Switch>
    </>
  )
}

LocalizedApp.propTypes = {}

export default withLocalization(LocalizedApp)
