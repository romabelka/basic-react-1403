import React from 'react'
import DateRange from './date-range'
import SelectFilter from './select'
import { connect } from 'react-redux'

function Filters({ selected }) {
  return (
    <div>
      <SelectFilter selectArticles={selected} />
      <DateRange />
    </div>
  )
}
const mapStateToProps = (storeState) => ({
  selected: storeState.selected
})
export default connect(mapStateToProps)(Filters)
