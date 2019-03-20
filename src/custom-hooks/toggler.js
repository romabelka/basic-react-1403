import { useState } from 'react'

export default function useToggler() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => setIsOpen(!isOpen)

  return { isOpen, toggleOpen }
}
