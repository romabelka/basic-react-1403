import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ArticleList from '../article-list'
import Article from '../article'

class ArticlesRoute extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <ArticleList />
        <Route path="/articles/:id" render={this.getArticle} />
      </div>
    )
  }

  getArticle = ({ match }) => {
    console.log('---', 'article match: ', match)
    return <Article id={match.params.id} />
  }
}

export default ArticlesRoute
