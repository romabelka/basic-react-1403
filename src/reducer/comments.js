import { ADD_COMMENT } from '../constants'
import { normalizedComments } from '../fixtures'

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
    case ADD_COMMENT:
      const newComments = { ...comments }
      const { comment } = payload
      newComments[comment.id] = comment
      return newComments
    default:
      return comments
  }
}
