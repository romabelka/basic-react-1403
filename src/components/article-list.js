import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Article from './article'
import accordion from '../decorators/accordion'
import {
  articlesLoadingSelector,
  articlesLoadedSelector,
  filtratedArticlesSelector
} from '../selectors'
import { loadAllArticles } from '../ac'
import Loader from './common/loader'

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
    const { fetchAll, loaded } = this.props
    !loaded && fetchAll && fetchAll()
  }

  componentDidCatch(error) {
    this.setState({ error })
  }

  render() {
    if (this.state.error) return <h2>OOooops</h2>

    const { articles, toggleOpenItem, openItemId, loading, loaded } = this.props
    if (loading) return <Loader />
    if (loaded) {
      const articleItems = articles.map((article) => (
        <li key={article.id} className="test--article-list__item">
          <Article
            article={article}
            isOpen={article.id === openItemId}
            onBtnClick={toggleOpenItem(article.id)}
          />
        </li>
      ))
      return <ul>{articleItems}</ul>
    }
    return <></>
  }
}

export default connect(
  (state) => ({
    articles: filtratedArticlesSelector(state),
    loading: articlesLoadingSelector(state),
    loaded: articlesLoadedSelector(state)
  }),
  { fetchAll: loadAllArticles }
)(accordion(ArticleList))
