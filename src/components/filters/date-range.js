import React, { useState } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import { chooseDateRange } from '../../ac'
import 'react-day-picker/lib/style.css'

function DateRange({ dateRange, chooseDateRange, changeArticlesRange }) {
  const [state, setState] = useState({ from: null, to: null })

  const handleDayClick = (day) => {
    let newState = DateUtils.addDayToRange(day, state)
    setState(newState)
    return newState
  }

  const onDayClicked = (day) => {
    let { from, to } = handleDayClick(day)
    if (from && to) chooseDateRange({ from, to })
  }

  const { from, to } = state

  const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`

  return (
    <div className="date-range">
      <DayPicker
        selectedDays={(day) => DateUtils.isDayInRange(day, { from, to })}
        onDayClick={onDayClicked}
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
