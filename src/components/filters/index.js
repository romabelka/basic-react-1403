import React, { Component } from 'react'
import DateRange from './date-range'
import SelectFilter from './select'
import PropTypes from 'prop-types'

class Filters extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <SelectFilter articles={this.props.articles} />
        <DateRange />
      </div>
    )
  }
}

Filters.propTypes = {
  articles: PropTypes.array.isRequired
}

export default Filters
