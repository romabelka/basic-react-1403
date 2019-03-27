import React, { Component } from 'react'
import DateRange from './date-range'
import SelectFilter from './select'
import { connect } from 'react-redux'

class Filters extends Component {
  render() {
    return (
      <div>
        <SelectFilter selectArticles={this.props.selected} />
        <DateRange />
      </div>
    )
  }
}
const mapStateToProps = (storeState) => ({
  selected: storeState.selected
})
export default connect(mapStateToProps)(Filters)
