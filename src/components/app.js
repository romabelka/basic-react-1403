import React, { useState } from 'react'
import Select from 'react-select'
import ArticleList from './article-list'
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css'

function App({ articles }) {
  const [username, setUsername] = useState('Roma')
  const [selected, setSelected] = useState()
  const [from, setFrom] = useState()
  const [to, setTo] = useState()
  const [numberOfMonths] = useState(2)

  const handleUserChange = (ev) => {
    const { value } = ev.target
    setUsername(value.length < 10 ? value : '')
  }

  const handleDayChange = (value) => {
    if (!from) {
      setFrom(value)
    }
    if (from && !to) {
      setTo(value)
    }
    if (from && to) {
      setFrom(value)
      setTo(null)
    }
  }

  const options = articles.map((article) => ({
    label: article.title,
    value: article.id
  }))

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
      <div style={{ display: 'block', marginLeft: '24px', marginTop: '8px', fontWeight: 'bold' }}>
        {from && to && `Выбраны даты с ${from.toLocaleDateString()} по ${to.toLocaleDateString()}`}{' '}
      </div>
      <div style={{ display: 'block' }}>
        <DayPicker
          numberOfMonths={numberOfMonths}
          selectedDays={[from, { from, to }]}
          modifiers={{ start: from, end: to }}
          onDayClick={handleDayChange}
        />
      </div>
      <Select value={selected} onChange={setSelected} options={options} isMulti />
      <ArticleList articles={articles} />
    </>
  )
}

App.propTypes = {}

export default App
