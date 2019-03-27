import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import Article from './article'
import accordion from '../decorators/accordion'

export class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
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

  filterArticles = () => {
    const { articles, filterArticlesIds, filterDateFrom, filterDateTo } = this.props
    const selectedArticlesIds = filterArticlesIds.map((option) => option.value)
    return articles.filter(
      (article) =>
        (selectedArticlesIds.length === 0 || selectedArticlesIds.indexOf(article.id) >= 0) &&
        (filterDateFrom == null || DateUtils.isDayAfter(new Date(article.date), filterDateFrom)) &&
        (filterDateTo == null || DateUtils.isDayBefore(new Date(article.date), filterDateTo))
    )
  }

  render() {
    if (this.state.error) return <h2>OOooops</h2>

    const { toggleOpenItem, openItemId } = this.props
    const articleItems = this.filterArticles().map((article) => (
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
  filterArticlesIds: state.filter.selectedArticles,
  filterDateFrom: state.filter.dateFrom,
  filterDateTo: state.filter.dateTo
}))(accordion(ArticleList))
