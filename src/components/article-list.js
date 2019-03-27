import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Article from './article'
import accordion from '../decorators/accordion'

class ArticleList extends Component {
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

const mapStateToProps = (state) => {
  const {
    selected,
    dateRange: { from, to }
  } = state.filters

  const filteredArticleItems = state.articles.filter((article) => {
    const date = Date.parse(article.date)
    const isSelectedByDayPicker = from && to && (date > from && date < to)
    const isSelectedBySelect = selected.find((selected) => selected.value === article.id)

    return (!selected.length || isSelectedBySelect) && (!from || !to || isSelectedByDayPicker)
  })

  return {
    articles: filteredArticleItems
  }
}

export default connect(mapStateToProps)(accordion(ArticleList))
