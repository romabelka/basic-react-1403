import { useState } from 'react'

export default function useAccordion() {
  const [openItemId, setOpenItemId] = useState(null)
  const toggleOpenItem = (id) => () => setOpenItemId(id)

  return { openItemId, toggleOpenItem }
}
