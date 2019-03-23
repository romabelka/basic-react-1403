import { useState } from 'react'

export default function commentFormInputHook() {
  const [text, setUsername] = useState('')

  const handleInputChange = (ent) => {
    let { value } = ent.target
    setUsername(value)
  }
  return [text, handleInputChange]
}
