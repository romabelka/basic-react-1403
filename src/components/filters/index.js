import React, { Component } from 'react'
import DateRange from './date-range'
import PropTypes from 'prop-types'
import SelectFilter from './select'
import { connect } from 'react-redux'
import defaultArticles from '../../fixtures'

class Filters extends Component {
  static propTypes = {
    filters: PropTypes.shape({
      selectFilter: PropTypes.array,
      dateFilter: PropTypes.shape({ from: PropTypes.string, to: PropTypes.string })
    })
  }

  render() {
    const { filters } = this.props

    return (
      <div>
        <SelectFilter articles={defaultArticles} filter={filters} />
        <DateRange filter={filters.dateFilter} />
      </div>
    )
  }
}

const mapStateToProps = (storeState) => ({
  filters: storeState.filters
})

export default connect(mapStateToProps)(Filters)
