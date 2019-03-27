import React from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { changeTitleSelect } from '../../ac'

function SelectFilter({ articles, selected, handleSelectionChange }) {
  const options = articles.map((article) => ({
    label: article.title,
    value: article.id
  }))

  return <Select options={options} value={selected} onChange={handleSelectionChange} isMulti />
}

const mapStoreStateToProps = (storeState) => ({
  selected: storeState.titleSelect,
  articles: storeState.articles
})

const mapDispatchToProps = {
  handleSelectionChange: changeTitleSelect
}
export default connect(
  mapStoreStateToProps,
  mapDispatchToProps
)(SelectFilter)
