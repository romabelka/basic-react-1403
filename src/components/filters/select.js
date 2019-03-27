import React from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { changeSelected } from '../../ac'

function SelectFilter({ articles, selected, handleSelected }) {
  const options = articles.map((article) => ({
    label: article.title,
    value: article.id
  }))

  return <Select options={options} value={selected} onChange={handleSelected} isMulti />
}

const mapStateToProps = (store) => ({
  selected: store.selected,
  articles: store.articles.allArticles
})

const mapDispatchToProps = {
  handleSelected: changeSelected
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectFilter)
