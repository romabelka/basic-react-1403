// just fo training create decorator fo calendar
import React, { Component } from 'react'
import { DateUtils } from 'react-day-picker'

export default (OriginalComponent) =>
  class AccordionDecorator extends Component {
    state = {
      from: null,
      to: null
    }

    handleDayClick = (day) => {
      const range = DateUtils.addDayToRange(day, this.state)
      this.setState(range)
    }
    // насколько такой кэрринг используется в Реакте?
    handleResetClick = ((state) => () => {
      this.setState(state)
    })(this.state)

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          handleDayClick={this.handleDayClick}
          handleResetClick={this.handleResetClick}
        />
      )
    }
  }
