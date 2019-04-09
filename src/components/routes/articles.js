import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ArticleList from '../article-list'
import Article from '../article'
import withLocalization from '../../l10n/with-localization'

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
    if (!match) return <h1>{this.props.strings['select.article']}</h1>
    return <Article id={match.params.id} />
  }
}

export default withLocalization(ArticlesRoute)
