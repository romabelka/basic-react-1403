import React from 'react'
import Article from './article'
import useAccordion from '../custom-hooks/accordion'

function ArticleList({ articles }) {
  const { openItemId, toggleOpenItem } = useAccordion()

  const articleItems = articles.map((article) => {
    const isOpen = article.id === openItemId
    return (
      <li key={article.id}>
        <Article
          article={article}
          isOpen={isOpen}
          onBtnClick={toggleOpenItem(isOpen ? null : article.id)}
        />
      </li>
    )
  })

  return <ul>{articleItems}</ul>
}

export default ArticleList
