import React, { Component, Fragment } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

class RangeDaypicker extends Component {
  state = {
    from: null,
    to: null
  }

  handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, this.state)
    this.setState(range)
  }

  render() {
    const { from, to } = this.state
    const modifiers = { start: from, end: to }

    return (
      <Fragment>
        <DayPicker
          selectedDays={[from, { from, to }]}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
        />
        <p>
          Selected date from{' '}
          {from ? <span>{from.toLocaleDateString()}</span> : <span>DD.MM.YYYY</span>} to{' '}
          {to ? <span>{to.toLocaleDateString()}</span> : <span>DD.MM.YYYY</span>}
        </p>
      </Fragment>
    )
  }
}

export default RangeDaypicker
