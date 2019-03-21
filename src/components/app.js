import React, { useState } from 'react'
import { findDOMNode } from 'react-dom'
import ArticleList from './article-list'
import Filters from './filters'
import ArticlesChart from './articles-chart'

function App({ articles }) {
  const [username, setUsername] = useState('Roma')

  const handleUserChange = (ev) => {
    const { value } = ev.target
    setUsername(value.length < 10 ? value : '')
  }

  return (
    <>
      <h1>Article App</h1>
      Username:{' '}
      <input
        type="text"
        value={username}
        onChange={handleUserChange}
        style={{
          color: username.length < 5 ? 'red' : 'black'
        }}
      />
      <ArticlesChart article={articles} />
      <Filters articles={articles} />
      <ArticleList articles={articles} ref={setArticlesRef} />
    </>
  )
}

function setArticlesRef(ref) {
  console.log('---', ref, findDOMNode(ref))
}

App.propTypes = {}

export default App
