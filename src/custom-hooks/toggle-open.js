import { useState } from 'react'

export default function useToggleOpen(defaultOpen = false) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const toggleOpen = () => setIsOpen(!isOpen)

  return { isOpen, toggleOpen }
}
