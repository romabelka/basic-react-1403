import { useState } from 'react'

export default function useAccordion() {
  const [openItemId, setOpenItemId] = useState(null)
  const toggleOpenItem = (id) => () => (openItemId ? setOpenItemId(null) : setOpenItemId(id))

  return { openItemId, toggleOpenItem }
}
