import React from 'react'
import ArticleList from './article-list'

function App({ articles }) {
  return (
    <>
      <h1>Article App</h1>
      <ArticleList articles={articles} />
    </>
  )
}

App.propTypes = {}

export default App
