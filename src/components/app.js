import React, { useState } from 'react'
import { NavLink, Route, Switch, Redirect } from 'react-router-dom'
import Filters from './filters'
import Counter from './counter'
import ArticlesRoute from './routes/articles'
import CommentsRoute from './routes/comments'

function App() {
  const [username, setUsername] = useState('Roma')

  const handleUserChange = (ev) => {
    const { value } = ev.target
    setUsername(value.length < 10 ? value : '')
  }

  return (
    <>
      <h1>Article App</h1>
      <div>
        <div>
          <NavLink to="/articles" activeStyle={{ color: 'red' }}>
            Articles
          </NavLink>
        </div>
        <div>
          <NavLink to="/filters" activeStyle={{ color: 'red' }}>
            Filters
          </NavLink>
        </div>
        <div>
          <NavLink to="/counter" activeStyle={{ color: 'red' }}>
            Counter
          </NavLink>
        </div>
        <div>
          <NavLink to="/comments" activeStyle={{ color: 'red' }}>
            Comments
          </NavLink>
        </div>
      </div>
      Username:{' '}
      <input
        type="text"
        value={username}
        onChange={handleUserChange}
        style={{
          color: username.length < 5 ? 'red' : 'black'
        }}
      />
      <Switch>
        <Redirect from="/" exact to="/articles" />
        <Route path="/counter" component={Counter} exact />
        <Route path="/filters" component={Filters} />
        <Route path="/articles/new" render={() => <h1>New Article Form</h1>} />
        <Route path="/articles" component={ArticlesRoute} />
        <Route path="/comments" component={CommentsRoute} />

        <Route path="/" render={() => <h1>Not Found</h1>} />
      </Switch>
    </>
  )
}

App.propTypes = {}

export default App
