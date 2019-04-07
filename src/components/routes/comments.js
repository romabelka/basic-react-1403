import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { commentsTotalSelector } from '../../selectors'
import { loadComments } from '../../ac'
import CommentsListPage from '../comments-list-page'
import Paginator from '../paginator'
import PropTypes from 'prop-types'

const LIMIT = 5

class CommentsRoute extends Component {
  componentDidMount() {
    const { loadComments } = this.props
    loadComments && loadComments(LIMIT, 0)
  }

  render() {
    const hasPages = !!this.props.total

    return (
      <div>
        {hasPages && (
          <Paginator totalRecordsCount={this.props.total} pageLimitCount={LIMIT} path="/comments" />
        )}

        <Route
          path={`${this.props.match.path}/:page`}
          render={(props) => <CommentsListPage limit={LIMIT} {...props} />}
        />
      </div>
    )
  }
}

CommentsRoute.propTypes = {
  total: PropTypes.number
}
const mapStateToProp = (state) => ({
  total: commentsTotalSelector(state)
})

const mapDispathToProp = { loadComments }
export default connect(
  mapStateToProp,
  mapDispathToProp
)(CommentsRoute)
