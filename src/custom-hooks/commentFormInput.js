import { useState } from 'react'

export default function commentFormInputHook() {
  const [state, setState] = useState('')

  const handleInputChange = (ent) => {
    let { value } = ent.target
    setState(value)
  }
  return [state, handleInputChange]
}
