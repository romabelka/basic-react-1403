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

    const { articles, toggleOpenItem, openItemId , dateRange, filteredArticles} = this.props;
    const filteredArticlesList = filteredArticles
      ? filteredArticles.length != 0
        ? filteredArticles
        : articles
      : articles;

    const filteredByDayArticleList = dateRange.to === null
      ? filteredArticlesList
      : filteredArticlesList.filter((article) => ((Date.parse(article.date) - dateRange.from >= 0) && (dateRange.to - Date.parse(article.date)  >= 0)))

    const articleItems = filteredByDayArticleList.map((article) => (
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
  filteredArticles: state.filteredArticles,
  dateRange: state.currentRange
}))(accordion(ArticleList))
