import React, { useState } from 'react'
import Select from 'react-select'

function SelectFilter({ articles, onChange }) {
  const [selected, setSelection] = useState(null)

  const options = articles.map((article) => ({
    label: article.title,
    value: article.id
  }))

  return (
    <Select
      options={options}
      value={selected}
      onChange={(opt) => {
        console.log(opt)
        setSelection()
        onChange(opt)
      }}
      isMulti
    />
  )
}

export default SelectFilter
