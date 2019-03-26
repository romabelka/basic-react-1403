import React from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import { changeDateRange } from '../../ac'

import 'react-day-picker/lib/style.css'

function DateRange({ fromDate, toDate, handleChangeDateRange }) {
  console.log('init component ', fromDate, toDate)
  const handleDayClick = (day) => {
    console.log('befor ', fromDate, toDate)
    const { from, to } = DateUtils.addDayToRange(day, { from: fromDate, to: toDate })
    console.log('after ', from, to)
    handleChangeDateRange(from, to)
  }

  const selectedRange =
    fromDate && toDate && `${fromDate.toDateString()} - ${toDate.toDateString()}`

  return (
    <div className="date-range">
      <DayPicker
        selectedDays={(day) => DateUtils.isDayInRange(day, { fromDate, toDate })}
        onDayClick={handleDayClick}
      />
      {selectedRange}
    </div>
  )
}

const mapStoreStateToProps = (storeState) => ({
  fromDate: storeState.dateRange.fromDate,
  toDate: storeState.dateRange.toDate
})

const mapDispatchToProps = {
  handleChangeDateRange: changeDateRange
}

export default connect(
  mapStoreStateToProps,
  mapDispatchToProps
)(DateRange)
