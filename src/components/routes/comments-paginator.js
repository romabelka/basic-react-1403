import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import CommentsPaginator from '../comments-paginator'
import Paginator from './../paginator'

export default class CommentsPaginatorRoute extends Component {
  render() {
    return (
      <div>
        <Paginator />
        <Route path="/comment/:page" render={this.getComments} />
      </div>
    )
  }

  getComments = ({ match }) => {
    return (
      <div>
        <CommentsPaginator page={Number(match.params.page)} />
      </div>
    )
  }
}
