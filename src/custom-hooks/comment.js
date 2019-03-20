import { useState } from 'react'

export default function() {
  const [isOpen, setState] = useState(false)
  const toggle = () => setState(!isOpen)

  return { isOpen, toggle }
}
