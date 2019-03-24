import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'

function SelectFilter(props) {
  const [selected, setSelection] = useState(null)

  const options = props.articles.map((article) => ({
    label: article.title,
    value: article.id
  }))

  return <Select options={options} value={selected} onChange={setSelection} isMulti />
}

SelectFilter.propTypes = {
  articles: PropTypes.array.isRequired
}

export default SelectFilter
