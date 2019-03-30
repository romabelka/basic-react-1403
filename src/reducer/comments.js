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
  const { type } = action

  switch (type) {
    case ADD_COMMENT:
      const {
        uniqId,
        payload: { comment }
      } = action
      return { ...comments, [uniqId]: { ...comment, id: uniqId } }

    default:
      return comments
  }
}
