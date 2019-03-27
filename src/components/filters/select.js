import React from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { selectArticles } from '../../ac'

function SelectFilter({ selected, filterArticle, selectArticles, articles }) {
  const options = articles.map((article) => ({
    label: article.title,
    value: article.id
  }))

  return (
    <Select
      options={options}
      value={selected}
      onChange={(opt) => {
        selectArticles(opt)
      }}
      isMulti
    />
  )
}
export default connect(
  (storeState) => ({
    articles: storeState.articles
  }),
  { selectArticles }
)(SelectFilter)
