import React, { useState } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

export default function() {
  const [from, setFrom] = useState(new Date())
  const [to, setTo] = useState(null)

  const handleClick = (day) => {
    const range = DateUtils.addDayToRange(day, { from, to })

    setFrom(range.from)
    setTo(range.to)
  }

  const renderDateRange = () => {
    if (!from) return null

    const fromText = from.toLocaleDateString('ru')
    const toText = to && to.toLocaleDateString('ru')
    const showTo = toText && fromText !== toText

    return (
      <div>
        {`${showTo ? 'Текущий период' : 'Текущая дата:'} ${fromText} ${
          showTo ? ' — ' + toText : ''
        }`}
      </div>
    )
  }

  return (
    <>
      <DayPicker selectedDays={[from, { from, to }]} onDayClick={handleClick} />

      {renderDateRange()}
    </>
  )
}
