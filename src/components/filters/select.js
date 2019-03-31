import React from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { changeSelection } from '../../ac'
import { articleListSelector, selectedSelector } from '../../selectors'

function SelectFilter({ articles, selected, changeSelection }) {
  const options = Object.keys(articles).map((key) => {
    let article = articles[key]
    return {
      label: article.title,
      value: key
    }
  })

  return <Select options={options} value={selected} onChange={changeSelection} isMulti />
}

export default connect(
  (state) => ({
    selected: selectedSelector(state),
    articles: articleListSelector(state)
  }),
  { changeSelection }
)(SelectFilter)
