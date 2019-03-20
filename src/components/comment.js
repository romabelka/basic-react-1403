import React from 'react'
import useToggleFlag from '../custom-hooks/toggleFlag'

function Comment({ comment }) {
  const { flag, toggleFlag } = useToggleFlag()

  const text = !flag ? 'close' : 'open'
  return (
    <div>
      <h3>{comment.user}</h3>
      <button onClick={toggleFlag}>{text}</button>
      {getBody({ flag, comment })}
    </div>
  )
}

function getBody({ flag, comment }) {
  if (!flag) return null
  return <section>{comment.text}</section>
}

export default Comment
