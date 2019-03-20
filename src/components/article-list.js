import React from 'react'
import Article from './article'
import useAccordion from '../custom-hooks/accordion'
import CommentsList from './comments-list'

var styleAticle = {
  ul: {
    display: 'flex',
    'justify-content': 'space-around',
    'flex-wrap': 'wrap'
  },
  li: {
    width: 'calc(100%/4)'
  }
}

function ArticleList({ articles }) {
  // const { openItemId, toggleOpenItem } = useAccordion()

  const articleItems = articles.map((article) => (
    <li key={article.id} style={styleAticle.li}>
      <Article article={article} />
      <CommentsList comments={article.comments} />
    </li>
  ))

  return <ul style={styleAticle.ul}>{articleItems}</ul>
}

export default ArticleList
