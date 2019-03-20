import React, { useState } from 'react'
import Select from 'react-select'
import ArticleList from './article-list'
import Calendar from './day-picker.js'

function App({ articles }) {
  const [username, setUsername] = useState('Andrey')
  const [selected, setSelected] = useState()

  const handleUserChange = (ev) => {
    const { value } = ev.target
    setUsername(value.length < 10 ? value : '')
  }

  const options = articles.map((article) => ({
    label: article.title,
    value: article.id
  }))

  return (
    <>
      <h1>Article App</h1>
      <Calendar />
      Username:{' '}
      <input
        type="text"
        value={username}
        onChange={handleUserChange}
        style={{
          color: username.length < 5 ? 'red' : 'black'
        }}
      />
      <Select value={selected} onChange={setSelected} options={options} isMulti />
      <ArticleList articles={articles} />
    </>
  )
}

App.propTypes = {}

export default App
