import React from 'react'
import useAccordion from '../custom-hooks/accordion'
import Article from './article'

export default function ArticleList({ articles }) {
  const { openItemId, toggleOpenItem } = useAccordion()

  const articlesView =
    articles &&
    articles.map((item) => (
      <li key={item.id}>
        <Article {...item} isOpen={item.id === openItemId} onBtnClick={toggleOpenItem(item.id)} />
      </li>
    ))

  return <ul>{articlesView}</ul>
}
