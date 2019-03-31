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
  switch (action.type) {
    case ADD_COMMENT: {
      const {
        payload: { comment, generatedId }
      } = action
      return { ...comments, [generatedId]: { ...comment, id: generatedId } }
    }
    default:
      return comments
  }
}
