import React from 'react'
import { connect } from 'react-redux'
import DayPicker, { DateUtils } from 'react-day-picker'
import { filterDateRangeChange } from '../../ac'

import 'react-day-picker/lib/style.css'

function DateRange({ dateRange, filterDateRangeChange }) {
  const handleDayClick = (day) => filterDateRangeChange(DateUtils.addDayToRange(day, dateRange))

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
    dateRange: state.filters.dateRange
  }),
  { filterDateRangeChange }
)(DateRange)
