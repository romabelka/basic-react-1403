import React from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { changeSelectedArticles } from '../../ac'

function SelectFilter({ articles, filterArticlesIds, changeSelectedArticles }) {
  const options = articles.map((article) => ({
    label: article.title,
    value: article.id
  }))

  const handleChange = (selectedOptions) => {
    changeSelectedArticles(selectedOptions)
  }

  return <Select options={options} value={filterArticlesIds} onChange={handleChange} isMulti />
}

export default connect(
  (state) => ({
    articles: state.articles,
    filterArticlesIds: state.filterArticlesIds
  }),
  { changeSelectedArticles }
)(SelectFilter)
