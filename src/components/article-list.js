import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Article from './article'
import accordion from '../decorators/accordion'
import { filterArticles } from '../ac'

export class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    fetchAll: PropTypes.func,
    //from decorator
    openItemId: PropTypes.string,
    toggleOpenItem: PropTypes.func,
    filters: PropTypes.shape({
      selectFilter: PropTypes.array,
      dateFilter: PropTypes.shape({ from: PropTypes.string, to: PropTypes.string })
    }),
    filterArticles: PropTypes.func
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

  componentDidUpdate(prevProps) {
    if (prevProps.filters && this.props.filters !== prevProps.filters) {
      this.props.filterArticles(this.props.filters)
    }
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

const mapDispatchToProps = {
  filterArticles
}

export default connect(
  (state) => ({
    articles: state.articles,
    filters: state.filters
  }),
  mapDispatchToProps
)(accordion(ArticleList))
