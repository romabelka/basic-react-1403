import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Article from './article'
import accordion from '../decorators/accordion'
import { articlesLoadingSelector, filtratedArticlesSelector } from '../selectors'
import { loadAllArticles } from '../ac'
import Loader from './common/loader'
import { NavLink } from 'react-router-dom'

export class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.object.isRequired,
    fetchAll: PropTypes.func,
    //from decorator
    openItemId: PropTypes.string,
    toggleOpenItem: PropTypes.func
  }

  state = {
    error: null
  }

  componentDidMount() {
    const { fetchAll } = this.props
    fetchAll && fetchAll()
  }

  componentDidCatch(error) {
    this.setState({ error })
  }

  render() {
    if (this.state.error) return <h2>OOooops</h2>

    const { articles, loading } = this.props
    if (loading) return <Loader />

    const articleItems = articles.map((article) => (
      <li key={article.id} className="test--article-list__item">
        <NavLink to={`/articles/${article.id}`} activeStyle={{ color: 'red' }}>
          {article.title}
        </NavLink>
      </li>
    ))

    return <ul>{articleItems}</ul>
  }
}

export default connect(
  (state) => ({
    articles: filtratedArticlesSelector(state),
    loading: articlesLoadingSelector(state)
  }),
  { fetchAll: loadAllArticles }
)(accordion(ArticleList))
