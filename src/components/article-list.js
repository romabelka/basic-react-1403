import React from 'react'
// Если испльзовать хуки
import Article from './article'
// Если использовать декоратор
// import Article from './article-class'
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
