import React, { useState } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { selectArticle } from '../../ac'

function SelectFilter({ articles, selected, selectArticle }) {
  const options = articles.map((article) => ({
    label: article.title,
    value: article.id
  }))

  return <Select options={options} value={selected} onChange={selectArticle} isMulti />
}

export default connect(
  (state) => ({
    articles: state.articles,
    selected: state.selected
  }),
  {
    selectArticle
  }
)(SelectFilter)
