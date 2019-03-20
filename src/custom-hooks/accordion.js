import { useState } from 'react'

export default function useAccordion() {
  const [openItemId, setOpenItemId] = useState(null)


  // doesn't work button close
  const toggleOpenItem = (id) => () =>  {
    if (openItemId === id) {
      return setOpenItemId(null)
    }

    return setOpenItemId(id);
  }

  return { openItemId, toggleOpenItem }
}
