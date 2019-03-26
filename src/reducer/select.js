import { SELECT_ARTICLE } from '../constants'

export default (state, action) => {
  const { type, payload } = action

  if (type === SELECT_ARTICLE) {
    return payload
  }

  return { label: null, value: null }
}
