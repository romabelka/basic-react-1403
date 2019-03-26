import React from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'
import { setSelectFilter } from '../../ac'
import { connect } from 'react-redux'

function SelectFilter({ articles, filter, setSelectFilter }) {
  const options = articles.map((article) => ({
    label: article.title,
    value: article.id
  }))

  const handleChange = (value) => {
    setSelectFilter(value)
  }

  return <Select options={options} value={filter.selectFilter} onChange={handleChange} isMulti />
}

SelectFilter.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string
  }),
  filters: PropTypes.shape({
    selectFilter: PropTypes.array,
    dateFilter: PropTypes.shape({ from: PropTypes.string, to: PropTypes.string })
  }),
  setSelectFilter: PropTypes.func
}

export default connect(
  null,
  { setSelectFilter }
)(SelectFilter)
