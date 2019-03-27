import React, { Component } from 'react'
import DateRange from './date-range'
import SelectFilter from './select'
import PropTypes from 'prop-types'
import { filterArticle } from '../../ac'
import { connect } from 'react-redux'

class Filters extends Component {
  static propTypes = {
    filterArticle: PropTypes.func.isRequired
  }

  render() {
    return (
      <div>
        <SelectFilter onChange={this.props.filterArticle} />
        <DateRange />
      </div>
    )
  }
}
export default connect(
  null,
  { filterArticle }
)(Filters)
