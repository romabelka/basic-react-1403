import React, { Component } from 'react'
import DateRange from './date-range'
import SelectFilter from './select'
import PropTypes from 'prop-types'
import { filterArticle } from '../../ac'
import { connect } from 'react-redux'

class Filters extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    filterArticle: PropTypes.func.isRequired
  }

  render() {
    return (
      <div>
        <SelectFilter articles={this.props.articles} onChange={this.props.filterArticle} />
        <DateRange />
      </div>
    )
  }
}
const mapStateToProps = (store) => ({ articles: store.articles })

export default connect(
  mapStateToProps,
  { filterArticle }
)(Filters)
