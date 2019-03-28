import {} from '../constants'
import { normalizedComments as defaultComments } from '../fixtures'

export default (comments = defaultComments, action) => {
  const { type } = action

  switch (type) {
    default:
      return comments
  }
}
