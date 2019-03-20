import React from 'react'
import useToggleFlag from '../custom-hooks/toggleFlag'

function Article({ article }) {
  // тяжело конечно привыкнуть в hook, но их мощь я конечно почувствовал!!!
  const { flag, toggleFlag } = useToggleFlag()

  const text = !flag ? 'close' : 'open'
  return (
    <div>
      <h3>{article.title}</h3>
      <button onClick={toggleFlag}>{text}</button>
      {getBody({ flag, article })}
    </div>
  )
}

function getBody({ flag, article }) {
  if (!flag) return null
  return <section>{article.text}</section>
}

export default Article
