import { useState } from 'react'

export default function useAccordion() {
  const [openItemId, setOpenItemId] = useState(null)
  const toggleOpenItem = (id, isOpened) => () => setOpenItemId(isOpened ? null : id)

  return { openItemId, toggleOpenItem }
}
