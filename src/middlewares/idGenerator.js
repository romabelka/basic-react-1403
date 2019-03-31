import { ADD_COMMENT } from '../constants'

export default (store) => (next) => (action) => {
  const uuidv4 = require('uuid/v4')
  const id = uuidv4()
  if (action.type === ADD_COMMENT) {
    if (action.payload.comment) {
      action.payload.comment.id = id
    }
  }
  next(action)
}
