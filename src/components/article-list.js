import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Article from './article'
import accordion from '../decorators/accordion'
import { filtratedArticlesSelector } from '../selectors'

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
    console.log('---', 'rendering ArticleList')
    if (this.state.error) return <h2>OOooops</h2>

    const { articles, toggleOpenItem, openItemId } = this.props
    const articleItems = Object.keys(articles).map((key) => (
      <li key={key} className="test--article-list__item">
        <Article id={key} isOpen={key === openItemId} onBtnClick={toggleOpenItem(key)} />
      </li>
    ))

    return <ul>{articleItems}</ul>
  }
}

export default connect((state) => {
  console.log('---', 'connect')
  return {
    articles: filtratedArticlesSelector(state)
  }
})(accordion(ArticleList))
