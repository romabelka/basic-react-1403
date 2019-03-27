import React, { useState } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import { filterArticles, updateDateRange } from '../../ac'

import 'react-day-picker/lib/style.css'

function DateRange({ dateRange, selected, handleDaySelect, triggerArticleFilter }) {
  triggerArticleFilter({ dateRange, selected })

  const handleDayClick = (day) => {
    handleDaySelect(day)
  }

  const { from, to } = dateRange
  const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`

  return (
    <div className="date-range">
      <DayPicker
        selectedDays={(day) => DateUtils.isDayInRange(day, { from, to })}
        onDayClick={handleDayClick}
        month={new Date(2016, 0)} // all articles in 2016
      />
      {selectedRange}
    </div>
  )
}

const mapStateToProps = (store) => {
  return {
    dateRange: store.dateRange,
    selected: store.selected
  }
}

const mapDispatchToProps = {
  handleDaySelect: updateDateRange,
  triggerArticleFilter: filterArticles
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DateRange)
