import React from 'react'
import CommentsPagination from '../comments-pagination'
import { Route } from 'react-router-dom'

function CommentsRoute() {
  return <Route path="/comments/:page" render={getCommentsPaginator} />
}

function getCommentsPaginator({ match }) {
  return <CommentsPagination page={match.params.page} />
}

CommentsRoute.propTypes = {}

export default CommentsRoute
