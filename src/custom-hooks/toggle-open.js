import { useState } from 'react'

export default function useToogleOpen(defaultOpen = false) {
  const [isOpen, toggleOpen] = useState(defaultOpen)
  const toggleOpenItem = () => toggleOpen(!isOpen)

  return { isOpen, toggleOpenItem }
}
