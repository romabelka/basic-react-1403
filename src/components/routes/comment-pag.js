import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import CommentPag from '../comment-pag'

class CommentPagRoute extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <Switch>
          <Redirect from="/comment-pag" exact to="/comment-pag/1" />
          <Route path="/comment-pag/:pageNum" render={this.getPage} />
        </Switch>
      </div>
    )
  }

  getPage = ({ match }) => {
    const pageNum = match && match.params.pageNum ? +match.params.pageNum : 0
    return <CommentPag pageNum={pageNum} />
  }
}

export default CommentPagRoute
