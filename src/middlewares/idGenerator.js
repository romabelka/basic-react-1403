import { ADD_COMMENT } from '../constants'

export default (store) => (next) => (action) => {
  if (action.type === ADD_COMMENT) {
    const generatedId = new Date().getTime()
    action.payload.generatedId = generatedId
  }
  next(action)
}
