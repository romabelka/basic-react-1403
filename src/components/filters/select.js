import React from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { changeSelectedArticles } from '../../ac'

function SelectFilter({ articles, filterArticlesIds }) {
  const options = articles.map((article) => ({
    label: article.title,
    value: article.id
  }))

  return (
    <Select
      options={options}
      onChange={(selectedOptions) => {
        changeSelectedArticles(selectedOptions)
      }}
      isMulti
    />
  )
}

export default connect(
  (state) => ({
    articles: state.articles,
    filterArticlesIds: state.filterArticlesIds
  }),
  { changeSelectedArticles }
)(SelectFilter)
