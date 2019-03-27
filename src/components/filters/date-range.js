import React from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import { chooseDateRange } from '../../ac'

import 'react-day-picker/lib/style.css'
import dateRange from '../../reducer/date-range'

function DateRange({ dateRange, chooseDateRange }) {
  const handleDayClick = (day) => {
    chooseDateRange(DateUtils.addDayToRange(day, dateRange))
  }

  const { from, to } = dateRange
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

export default connect(
  (storeState) => ({
    dateRange: storeState.dateRange
  }),
  { chooseDateRange }
)(DateRange)
