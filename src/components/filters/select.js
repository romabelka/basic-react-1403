import React from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import articles from '../../fixtures'
import { selectArticles } from '../../ac'

function SelectFilter({ selected, filterArticle, selectArticles }) {
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
  null,
  { selectArticles }
)(SelectFilter)
