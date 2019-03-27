import React from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'

import { changeData } from '../../ac'
import 'react-day-picker/lib/style.css'

function DateRange({ dateRange, changeData }) {
  const { from, to } = dateRange
  const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`

  const handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, dateRange)

    changeData(range)
  }

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
  { changeData }
)(DateRange)
