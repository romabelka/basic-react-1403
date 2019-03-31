import React from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { changeSelection } from '../../ac'
import { articleSelector, articleListSelector, selectedSelector } from '../../selectors'

function SelectFilter({ articles, articleList, selected, changeSelection }) {
  const options = articleList
    .map((id) => articles[id])
    .map((article) => ({
      label: article.title,
      value: article.id
    }))

  return <Select options={options} value={selected} onChange={changeSelection} isMulti />
}

export default connect(
  (state) => ({
    selected: selectedSelector(state),
    articles: articleSelector(state),
    articleList: articleListSelector(state)
  }),
  { changeSelection }
)(SelectFilter)
