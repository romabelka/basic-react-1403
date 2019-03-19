import React, { useState } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'

import 'react-day-picker/lib/style.css'

export default function() {
  const [from, setFrom] = useState(new Date())
  const [to, setTo] = useState(null)

  const onDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, { from, to })
    setFrom(range.from)
    setTo(range.to)
  }

  return (
    <div>
      <p>
        {!from && !to && 'Выберите начальную дату'}
        {from && !to && 'Выберите конечную дату'}
        {from &&
          to &&
          `Выбранный диапазон: ${from.toLocaleDateString()} — ${to.toLocaleDateString()}`}
      </p>
      <DayPicker selectedDays={[from, { from, to }]} onDayClick={onDayClick} />
    </div>
  )
}
