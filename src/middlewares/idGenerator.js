import { COMMENT_ADD } from '../constants'

export default (store) => (next) => (action) => {
  const uuid = () => {
    return Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, '')
      .substr(0, 12)
  }

  if (action.type === COMMENT_ADD) {
    action.payload.id = uuid()
  }

  next(action)
}
