import md5 from 'js-md5'
import { ADD_NEW_COMMENT } from '../constants'

export default (store) => (next) => (action) => {
  if (action.type === ADD_NEW_COMMENT) {
    action.payload.id = md5(Date.now().toString())
  }
  next(action)
}
