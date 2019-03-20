import { useState } from 'react'

export default function useToggler() {
  const [isOpen, setOpen] = useState(false)
  const toggleOpen = () => setOpen(!isOpen)
  return { isOpen, toggleOpen }
}
