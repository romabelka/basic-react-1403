import React, { useState } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

function Calendar() {
  const [range, setRange] = useState({ from: undefined, to: undefined })
  const modifiers = { start: range.from, end: range.to }

  function handleDayClick(day) {
    const { from, to } = DateUtils.addDayToRange(day, range)
    setRange({ from, to })
  }

  function handleResetClick() {
    setRange({ from: undefined, to: undefined })
  }

  return (
    <>
      <p>
        {!range.from && !range.to && 'Please select the first day.'}
        {range.from && !range.to && 'Please select the last day.'}
        {range.from &&
          range.to &&
          `Selected from ${range.from.toLocaleDateString()} to
                ${range.to.toLocaleDateString()}`}{' '}
        {range.from && range.to && (
          <button className="link" onClick={handleResetClick}>
            Reset
          </button>
        )}
      </p>
      <DayPicker
        className="Selectable"
        modifiers={modifiers}
        selectedDays={range}
        onDayClick={handleDayClick}
      />
    </>
  )
}

export default Calendar
