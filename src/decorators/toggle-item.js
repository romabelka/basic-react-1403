import React, { useState } from 'react'

export default (OriginalComponent) =>
  function ToggleItemDecorator(props) {
    const [isOpen, setIsOpen] = useState(true)
    const toggleItem = () => setIsOpen(!isOpen)
    return <OriginalComponent {...props} isOpen={isOpen} toggleItem={toggleItem} />
  }
