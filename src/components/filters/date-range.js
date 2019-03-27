import React from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import { changeDateRange } from '../../ac'

import 'react-day-picker/lib/style.css'

function DateRange({ fromDate, toDate, handleChangeDateRange }) {
  const handleDayClick = (day) => {
    const { from, to } = DateUtils.addDayToRange(day, { from: fromDate, to: toDate })
    handleChangeDateRange(from, to)
  }

  const selectedRange =
    fromDate && toDate && `${fromDate.toDateString()} - ${toDate.toDateString()}`

  return (
    <div className="date-range">
      <DayPicker
        selectedDays={(day) => DateUtils.isDayInRange(day, { from: fromDate, to: toDate })}
        onDayClick={handleDayClick}
      />
      {selectedRange}
    </div>
  )
}

const mapStoreStateToProps = (storeState) => ({
  fromDate: storeState.filter.dateRange.fromDate,
  toDate: storeState.filter.dateRange.toDate
})

const mapDispatchToProps = {
  handleChangeDateRange: changeDateRange
}

export default connect(
  mapStoreStateToProps,
  mapDispatchToProps
)(DateRange)
