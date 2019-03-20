import React from 'react'
import Article from './article'
import CommentsList from './comments-list'
// import CommentListDecorator from './comments-list-decorator'
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
      <CommentsList comments={article.comments} />
    </li>
  ))

  return <ul>{articleItems}</ul>
}

export default ArticleList
