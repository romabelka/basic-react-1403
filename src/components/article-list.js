import React from 'react'
import Article from './article'
import useAccordion from '../custom-hooks/accordion'

function ArticleList({ articles }) {
  const { openItemId, toggleOpenItem } = useAccordion()

  const articleItems = articles.map((article) => (
    <li key={article.id}>
      <Article
        article={article}
        isOpen={article.id === openItemId}
        onBtnClick={toggleOpenItem(article.id)}
      />
    </li>
  ))

  return <ul>{articleItems}</ul>
}
export default ArticleList
