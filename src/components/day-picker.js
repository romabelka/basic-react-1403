import React from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

export default class Calendar extends React.Component {
  static defaultProps = {
    numberOfMonths: 1
  }
  constructor(props) {
    super(props)
    this.handleDayClick = this.handleDayClick.bind(this)
    this.handleResetClick = this.handleResetClick.bind(this)
    this.state = this.getInitialState()
  }
  getInitialState() {
    return {
      from: undefined,
      to: undefined
    }
  }
  handleDayClick(day) {
    /*Element is not accessible?
     * Почему здесь для DateUtils и DateUtils.addDayToRange
     * выдаётся вышеуказанное предупреждение от WebStorm?*/
    const range = DateUtils.addDayToRange(day, this.state)
    this.setState(range)
  }
  handleResetClick() {
    this.setState(this.getInitialState())
  }

  /*
  https://www.robinwieruch.de/conditional-rendering-react/
  Для понимания, что за структуры ниже
  {!from && !to && 'Please select the first day.'}
  {from && !to && 'Please select the last day.'}
  */

  render() {
    const { from, to } = this.state
    const modifiers = { start: from, end: to }
    return (
      <div className="CalendarRange">
        <p>
          {from &&
            to &&
            `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{' '}
          {from && to && (
            <button className="link" onClick={this.handleResetClick}>
              New Range
            </button>
          )}
        </p>
        <DayPicker
          className="Selectable"
          numberOfMonths={this.props.numberOfMonths}
          selectedDays={[from, { from, to }]}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
        />
      </div>
    )
  }
}
