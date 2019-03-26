import React from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'

import 'react-day-picker/lib/style.css'
import { connect } from 'react-redux'
import { changeDayRange } from '../../ac'

function DateRange({ range, changeDayRange}) {

  const handleDayClick = (day) => {
    console.log(range);
    console.log(DateUtils.addDayToRange(day, range));
    changeDayRange(DateUtils.addDayToRange(day, range))
  }

  const { from, to } = range;
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

//export default DateRange

export default connect((state) => ({
  range: state.currentRange
}), {changeDayRange})
(DateRange)
