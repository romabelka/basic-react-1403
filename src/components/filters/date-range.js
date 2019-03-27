import React, { useState } from 'react'
import { connect } from 'react-redux'
import DayPicker, { DateUtils } from 'react-day-picker'
import { dates } from '../../ac'
import 'react-day-picker/lib/style.css'

function DateRange(props) {
  const [state, setState] = useState({ from: null, to: null })

  const handleDayClick = (day) => setState(DateUtils.addDayToRange(day, state))

  const { from, to } = state
  const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`

  const sendData = () => {
    if (from === null && to === null) {
      return props.dates(null)
    }

    if (from && to) {
      return props.dates({ from: from.toString(), to: to.toString() })
    }

    if (from) {
      return props.dates({ from: from.toString() })
    }
  }

  return (
    <div className="date-range">
      <DayPicker
        selectedDays={(day) => DateUtils.isDayInRange(day, { from, to })}
        onDayClick={handleDayClick}
      />
      {selectedRange}
      <button onClick={sendData}>Filter</button>
    </div>
  )
}

export default connect(
  null,
  { dates }
)(DateRange)
