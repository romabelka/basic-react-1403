import React from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

export default class DatePrickerContainer extends React.Component {
  static defaultProps = {
    numberOfMonths: 2
  }

  state = { from: undefined, to: undefined }

  handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, this.state)
    this.setState(range)
  }

  formatDate(date) {
    return date.toLocaleDateString()
  }

  showDateRange(from, to) {
    if (from && to) {
      return <div>{`Selected from ${this.formatDate(from)} to ${this.formatDate(to)}`}</div>
    }
    return <div>No range selected</div>
  }

  render() {
    const { from, to } = this.state
    const { numberOfMonths } = this.props
    const modifiers = { start: from, end: to }

    return (
      <div>
        {this.showDateRange(from, to)}

        <DayPicker
          className="Selectable"
          numberOfMonths={numberOfMonths}
          selectedDays={[from, { from, to }]}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
        />
      </div>
    )
  }
}
