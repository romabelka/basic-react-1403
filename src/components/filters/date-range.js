import React from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import { changeFilterDateFrom, changeFilterDateTo } from '../../ac'
import 'react-day-picker/lib/style.css'

function DateRange({ from, to, changeFilterDateFrom, changeFilterDateTo }) {
  const handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, { from, to })
    changeFilterDateFrom(range.from)
    changeFilterDateTo(range.to)
  }
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
    from: state.filterDateFrom,
    to: state.filterDateTo
  }),
  {
    changeFilterDateFrom,
    changeFilterDateTo
  }
)(DateRange)
