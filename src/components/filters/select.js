import React, { useState } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { filterArticle } from '../../ac'

function SelectFilter({ articles, filteredArticles, filterArticle}) {

  const options = articles.map((article) => ({
    label: article.title,
    value: article.id,
    raw: article
  }))

  const value = filteredArticles ? articles.filter((article) => filteredArticles.includes(article)).map((article) =>({
    label: article.title,
    value: article.id,
    raw: article
  })) : null

  return <Select options={options} value={value} onChange={filterArticle} isMulti />
}

export default connect((state) => ({
    articles: state.articles,
    filteredArticles: state.filteredArticles
}), {filterArticle})
(SelectFilter)

//export default SelectFilter
