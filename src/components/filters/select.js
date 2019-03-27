import React from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import articles from '../../fixtures'
import { selectArticles } from '../../ac'

function SelectFilter({ selected, onChange, selectArticles }) {
  const options = articles.map((article) => ({
    label: article.title,
    value: article.id
  }))

  return (
    <Select
      options={options}
      value={selected}
      onChange={(opt) => {
        onChange(opt)
        selectArticles(opt)
      }}
      isMulti
    />
  )
}
const mapStateToProps = (storeState) => ({
  selected: storeState.selected
})

export default connect(
  mapStateToProps,
  { selectArticles }
)(SelectFilter)
