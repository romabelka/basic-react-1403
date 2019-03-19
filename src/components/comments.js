import React from 'react'
import useToggleState from '../custom-hooks/toggle-state'

export default function({ comments }) {
  if (!comments.length) return null

  const { isTrue: commentsShown, toggleState: toggleComments } = useToggleState()

  const btnText = commentsShown ? 'Скрыть комментарии' : 'Показать комментарии'

  return (
    <>
      <button onClick={toggleComments}>{btnText}</button>
      {commentsShown && (
        <ul>
          {comments.map(({ id, user, text }) => (
            <li key={id}>
              <h3>{user}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
