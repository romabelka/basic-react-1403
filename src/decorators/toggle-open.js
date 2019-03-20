import React, { useState } from 'react'

export default (OriginalComponent) =>
  function ToggleOpenDecorator(props) {
    const [isOpen, setIsOpen] = useState(false)
    const toggleOpen = () => setIsOpen(!isOpen)

    return <OriginalComponent {...props} isOpen={isOpen} toggleOpen={toggleOpen} />
  }
