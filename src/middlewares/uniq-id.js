import { ADD_COMMENT } from '../constants'

export default (store) => (next) => (action) => {
  const { type } = action
  const uniqId = Date.now()
  const targetTypes = [ADD_COMMENT]

  if (targetTypes.includes(type)) {
    next({
      ...action,
      uniqId
    })
  } else {
    next(action)
  }
}
