import React, { useState } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'

import 'react-day-picker/lib/style.css'

function DateRange() {
  const [state, setState] = useState({ from: null, to: null })

  const handleDayClick = (day) => setState(DateUtils.addDayToRange(day, state))

  const { from, to } = state
  const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`

  return (
    <div className="date-range">
      <DayPicker
        selectedDays={(day) => DateUtils.isDayInRange(day, { from, to })}
        onDayClick={handleDayClick}
      />
      {selectedRange}
    </div>
  )
}

export default DateRange
