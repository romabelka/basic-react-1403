import React from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import PropTypes from 'prop-types'
import 'react-day-picker/lib/style.css'
import { connect } from 'react-redux'
import { setDateFilter } from '../../ac'

function DateRange({ filter, setDateFilter }) {
  const handleDayClick = (day) => setDateFilter(DateUtils.addDayToRange(day, filter))

  const { from, to } = filter
  const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`

  return (
    <div className="date-range">
      <DayPicker
        selectedDays={(day) => DateUtils.isDayInRange(day, { from, to })}
        onDayClick={handleDayClick}
        initialMonth={new Date('2016-06-01')}
      />
      {selectedRange}
    </div>
  )
}

DateRange.propTypes = {
  filters: PropTypes.shape({
    selectFilter: PropTypes.array,
    dateFilter: PropTypes.shape({ from: PropTypes.string, to: PropTypes.string })
  }),
  setDateFilter: PropTypes.func
}

export default connect(
  null,
  { setDateFilter }
)(DateRange)
