import React from 'react'
import Select from 'react-select'
import { changeSelect } from '../../ac'
import { connect } from 'react-redux'

function SelectFilter({ articles, selected, changeSelect }) {
  console.log('selected', selected)
  const options = articles.map((article) => ({
    label: article.title,
    value: article.id
  }))

  return <Select options={options} value={selected} onChange={changeSelect} isMulti />
}

const mapStateToProps = (state) => {
  return {
    selected: state.filters.selected,
    articles: state.articles
  }
}

export default connect(
  mapStateToProps,
  { changeSelect }
)(SelectFilter)
