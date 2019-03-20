// just fo training create decorator fo calendar
import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'

export default (OriginalComponent) =>
  class AccordionDecorator extends Component {
    state = {
      from: null,
      to: null
    }

    handleDayClick = (state) => (day) => {
      const range = DateUtils.addDayToRange(day, state)
      this.setState(range)
    }
    handleResetClick = (state) => () => {
      this.setState(state)
    }

    render() {
      return (
        <OriginalComponent
          {...this.props}
          state={this.state}
          handleDayClick={this.handleDayClick(this.state)}
          handleResetClick={this.handleResetClick(this.state)}
        />
      )
    }
  }
