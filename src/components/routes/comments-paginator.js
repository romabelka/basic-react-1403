import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import CommentsPaginator from '../comments-paginator'

export default class CommentsPaginatorRoute extends Component {
  render() {
    return <Route path="/comment/:page" render={this.getComments} />
  }

  getComments = ({ match }) => {
    return <CommentsPaginator page={Number(match.params.page)} />
  }
}
