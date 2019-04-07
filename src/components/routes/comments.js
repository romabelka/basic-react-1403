import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import CommentListAll from '../comment-list-all'

class CommentsRoute extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/comments/:page" component={CommentListAll} />
          <Route path="/comments" component={CommentListAll} />
        </Switch>
      </div>
    )
  }
}

export default CommentsRoute
