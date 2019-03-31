import React from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { changeSelection } from '../../ac'
import { filterSelector, selectedSelector } from '../../selectors'

function SelectFilter({ articles, selected, changeSelection }) {
  return <Select options={articles} value={selected} onChange={changeSelection} isMulti />
}

export default connect(
  (state) => ({
    selected: selectedSelector(state),
    articles: filterSelector(state)
  }),
  { changeSelection }
)(SelectFilter)
