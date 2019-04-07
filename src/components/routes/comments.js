import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Comments from '../comments'

class CommentsRoute extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <Switch>
          <Redirect from="/comments" exact to="/comments/1" />
          <Route path="/comments/:pageNum" render={this.getPage} />
        </Switch>
      </div>
    )
  }

  getPage = ({ match }) => {
    console.log(match)
    const pageNum = match && match.params.pageNum ? +match.params.pageNum : 1
    return <Comments pageNum={pageNum} />
  }
}

export default CommentsRoute
