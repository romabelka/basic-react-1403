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
        <Route path={`${this.props.match.path}/:id`} children={this.getArticle} />
      </div>
    )
  }

  getArticle = ({ match }) => {
    if (!match) return <h1>Please select an article</h1>
    return <Article id={match.params.id} />
  }
}

export default ArticlesRoute
