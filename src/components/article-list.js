import React from 'react'
import Article from './article'
import ToggleOpenComponent from './toggle-open-component'

class ArticleList extends ToggleOpenComponent {
  render() {
    return <ul>{this.getArticles()}</ul>
  }

  getArticles = () =>
    this.props.articles.map((article) => (
      <li key={article.id}>
        <Article
          article={article}
          isOpen={article.id === this.state.openArticleId}
          onBtnClick={this.toggleOpenArticle(article.id)}
        />
      </li>
    ))
}

export default ArticleList
