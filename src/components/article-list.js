import React from 'react'
import Article from './article'
import useAccordion from '../custom-hooks/accordion'
import CommentsList from './comments-list'

function ArticleList({ articles }) {
  const { openItemId, toggleOpenItem } = useAccordion()

  const articleItems = articles.map((article) => (
    <li key={article.id}>
      <Article
        article={article}
        isOpen={article.id === openItemId}
        onBtnClick={toggleOpenItem(article.id)}
      />
      <CommentsList comments={article.comments} />
    </li>
  ))

  return <ul>{articleItems}</ul>
}

export default ArticleList
