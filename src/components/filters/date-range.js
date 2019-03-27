import React from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import { selectDateRange } from '../../ac'

import 'react-day-picker/lib/style.css'

function DateRange({ dateRange, selectDateRange }) {
  const handleDayClick = (day) => selectDateRange(DateUtils.addDayToRange(day, dateRange))

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
  (state) => ({
    dateRange: state.filter.dateRange
  }),
  {
    selectDateRange
  }
)(DateRange)
