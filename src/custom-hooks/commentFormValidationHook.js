import { useState } from 'react'

export default function commentFormValidationHook() {
  const [state, setState] = useState(false)
  const setValidity = (isValid) => {
    setState(isValid)
  }
  return [state, setValidity]
}
