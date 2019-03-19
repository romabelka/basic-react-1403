import { useState } from 'react'

export default function useFoldable() {
  const [isExpanded, setIsExpanded] = useState(false)
  const toggleExpansion = () => () => setIsExpanded(!isExpanded)

  return { isExpanded, toggleExpansion }
}
