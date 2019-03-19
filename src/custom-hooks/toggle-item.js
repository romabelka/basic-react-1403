import { useState } from 'react'

export default function useToggleItem() {
  const [isOpen, setIsOpen] = useState(true)
  const toggleItem = () => setIsOpen(!isOpen)

  return { isOpen, toggleItem }
}
