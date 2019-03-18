import React, { Component } from 'react'
import Article from './article'
import toggleOpen from '../decorators/toggle-open'

class ArticleList extends Component {
  render() {
    return <ul>{this.getArticles()}</ul>
  }

  getArticles() {
    const { articles, toggleOpenItem, openItemId } = this.props
    return articles.map((article) => (
      <li key={article.id}>
        <Article
          article={article}
          isOpen={article.id === openItemId}
          onBtnClick={toggleOpenItem(article.id)}
        />
      </li>
    ))
  }
}

export default toggleOpen(ArticleList)
