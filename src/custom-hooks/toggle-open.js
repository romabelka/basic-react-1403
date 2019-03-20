import { useState } from 'react'

export default function useToggleOpen() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => setIsOpen(!isOpen)

  return { isOpen, toggleOpen }
}
