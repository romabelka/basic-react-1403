import { useState } from 'react'

export default function useAccordion() {
  const [openItemId, setOpenItemId] = useState(null)
  const toggleOpenItem = (id, isOpen) => () => setOpenItemId(isOpen ? null : id)

  return { openItemId, toggleOpenItem }
}
