import { normalizedComments } from '../fixtures'
import { COMMENT_ADD } from '../constants'

const defaultComments = normalizedComments.reduce(
  (acc, comment) => ({
    ...acc,
    [comment.id]: comment
  }),
  {}
)

export default (comments = defaultComments, action) => {
  const { type, payload } = action

  switch (type) {
    case COMMENT_ADD:
      const { id, user, comment } = payload
      return { ...comments, [id]: { id, user, text: comment } }

    default:
      return comments
  }
}
