import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Article from './article'
import accordion from '../decorators/accordion'

export class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    dates: PropTypes.shape(),
    selectValues: PropTypes.shape(),
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

  renderTemplateArticle = (article, toggleOpenItem, openItemId) => {
    return (
      <li key={article.id} className="test--article-list__item">
        <Article
          article={article}
          isOpen={article.id === openItemId}
          onBtnClick={toggleOpenItem(article.id)}
        />
      </li>
    )
  }

  render() {
    if (this.state.error) return <h2>OOooops</h2>
    const { articles, toggleOpenItem, openItemId, dates, selectValues } = this.props

    let sortArray = articles

    if (selectValues !== null) {
      sortArray = articles.filter(function(article) {
        return selectValues.values.length ? selectValues.values.includes(article.id) : true
      })
    }

    const articleItems = sortArray.map((article) => {
      if (dates === null) {
        return this.renderTemplateArticle(article, toggleOpenItem, openItemId)
      }

      if (
        Date.parse(article.date) > Date.parse(dates.from) &&
        Date.parse(article.date) < Date.parse(dates.to)
      ) {
        return this.renderTemplateArticle(article, toggleOpenItem, openItemId)
      }

      return null
    })

    return <ul>{articleItems}</ul>
  }
}

export default connect((state) => {
  return {
    articles: state.articles,
    dates: state.dates,
    selectValues: state.selectValues
  }
})(accordion(ArticleList))
