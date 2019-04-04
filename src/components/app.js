import React, { useState } from 'react'
import { NavLink, Route } from 'react-router-dom'
import ArticleList from './article-list'
import Filters from './filters'
import Counter from './counter'

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
          <NavLink to="/filters" activeStyle={{ color: 'red' }}>
            Filters
          </NavLink>
          <NavLink to="/counter" activeStyle={{ color: 'red' }}>
            Counter
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
      <Route path="/counter" component={Counter} />
      <Route path="/filters" component={Filters} />
      <Route path="/articles" component={ArticleList} />
    </>
  )
}

App.propTypes = {}

export default App
