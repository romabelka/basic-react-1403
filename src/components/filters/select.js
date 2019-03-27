import React from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'
import { filterTitlesChange } from '../../ac'

function SelectFilter({ articles, selected, filterTitlesChange }) {
  const options = articles.map((article) => ({
    label: article.title,
    value: article.id
  }))

  return <Select options={options} value={selected} onChange={filterTitlesChange} isMulti />
}

export default connect(
  (state) => ({
    articles: state.articles,
    selected: state.filters.titles
  }),
  { filterTitlesChange }
)(SelectFilter)
