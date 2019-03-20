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

  return <ol>{articleItems}</ol>
}

export default ArticleList
