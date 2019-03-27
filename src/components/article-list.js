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

    const { articles, toggleOpenItem, openItemId } = this.props
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
}

export default connect((state) => ({
  articles: (() => {
    return state.articles
      .filter((article) => {
        return state.filter.selected.length
          ? state.filter.selected.find((selectFilter) => selectFilter.value === article.id)
          : true
      })
      .filter((article) => {
        const { from, to } = state.filter.dateRange

        if (from !== null && to !== null) {
          return (
            Date.parse(article.date) >= Date.parse(from) &&
            Date.parse(article.date) <= Date.parse(to)
          )
        } else if (from !== null) {
          return Date.parse(article.date) >= Date.parse(from)
        } else if (to !== null) {
          return Date.parse(article.date) <= Date.parse(to)
        } else {
          return true
        }
      })
  })()
}))(accordion(ArticleList))
