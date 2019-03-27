import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Article from './article'
import accordion from '../decorators/accordion'

export class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    fetchAll: PropTypes.func,
    //from decorator
    openItemId: PropTypes.string,
    toggleOpenItem: PropTypes.func,
    filter: PropTypes.object
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

  filterArticles(articles, filter) {
    var selectedIds = filter.selectedValues.map((val) => val.value)
    return articles
      .filter((article) => selectedIds.length === 0 || selectedIds.includes(article.id))
      .filter((article) => {
        const date = new Date(article.date)
        return (
          filter.dateRange.fromDate == null ||
          filter.dateRange.toDate == null ||
          (date >= filter.dateRange.fromDate && date <= filter.dateRange.toDate)
        )
      })
  }

  render() {
    if (this.state.error) return <h2>OOooops</h2>

    const { articles, toggleOpenItem, openItemId, filter } = this.props
    const visibleArticles = this.filterArticles(articles, filter)
    const articleItems = visibleArticles.map((article) => (
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
}

export default connect((state) => ({
  articles: state.articles,
  filter: state.filter
}))(accordion(ArticleList))
