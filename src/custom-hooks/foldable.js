import { useState } from 'react'

export default function useFoldable() {
  const [isExpanded, setIsExpanded] = useState(false)
  const toggleExpanded = () => () => setIsExpanded(!isExpanded)

  return { isExpanded, toggleExpanded }
}
