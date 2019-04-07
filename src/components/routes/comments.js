import React, { Component } from 'react'
import CommentsPage from '../comments-page'
import Paginator from '../paginator'
import { Route } from 'react-router-dom'
import { commentsTotalPagesSelector } from '../../selectors'
import { connect } from 'react-redux'

class CommentsRoute extends Component {
  render() {
    return (
      <div>
        <Paginator totalPages={this.props.totalPages} url="/comments" />
        <Route path={`${this.props.match.path}/:page`} render={this.getCommentsPage} />
      </div>
    )
  }

  getCommentsPage = ({ match }) => {
    return <CommentsPage page={match.params.page} />
  }
}
const mapStateToProps = (state) => ({
  totalPages: commentsTotalPagesSelector(state)
})

export default connect(mapStateToProps)(CommentsRoute)
