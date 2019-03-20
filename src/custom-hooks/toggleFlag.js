import { useState } from 'react'

export default function useToggleFlag() {
  const [flag, setFlag] = useState(false)
  const toggleFlag = () => setFlag(!flag)
  return { flag, toggleFlag }
}
