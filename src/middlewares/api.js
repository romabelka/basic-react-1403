import { FAIL, START, SUCCESS } from '../constants'

export default (store) => (next) => async (action) => {
  const { callAPI, type, ...rest } = action
  if (!callAPI) return next(action)

  next({
    type: type + START,
    ...rest
  })

  try {
    const rawRes = await fetch(callAPI)
    const response = await rawRes.json()

    next({
      type: type + SUCCESS,
      response,
      ...rest
    })
  } catch (error) {
    next({
      type: type + FAIL,
      error,
      ...rest
    })
  }
}
