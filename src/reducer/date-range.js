import { DATE_RANGE } from '../constants'

export default (state = { from: null, to: null }, action) =>
  action.type === DATE_RANGE ? action.payload.range : state
