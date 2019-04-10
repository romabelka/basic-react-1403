import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ArticleList from '../article-list'
import Article from '../article'
import LocalizedComponent from '../localization/localized-component-decorator'

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
    if (!match) return <h1>{this.props.dictionary['select.article']}</h1>
    return <Article id={match.params.id} />
  }
}

export default LocalizedComponent(ArticlesRoute)
