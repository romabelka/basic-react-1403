import React, { useState } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import './index.css'

export default function DayPickerInstance() {
  const [state, setState] = useState({ from: undefined, to: undefined })
  const { from, to } = state
  const range = from && to && `from ${from.toLocaleDateString()} to ${to.toLocaleDateString()}`
  const handleDayClick = (day) => setState(DateUtils.addDayToRange(day, state))

  return (
    <div className="range">
      <DayPicker
        className="Selectable"
        selectedDays={[from, { from, to }]}
        onDayClick={handleDayClick}
      />

      <p>{range}</p>
    </div>
  )
}
