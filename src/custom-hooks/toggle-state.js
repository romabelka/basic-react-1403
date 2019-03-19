import { useState } from 'react'

export default function toggleState() {
  const [isTrue, setStateToOpposite] = useState(false)
  const toggleState = () => setStateToOpposite(!isTrue)

  return { isTrue, toggleState }
}
