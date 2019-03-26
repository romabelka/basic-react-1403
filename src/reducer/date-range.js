import { CHANGE_DATE_RANGE } from '../constants'

const defaultRange = {
  fromDate: null,
  toDate: null
}
export default (range = defaultRange, action) => {
  console.log('reducer 1 - range - ', range)
  console.log('reducer 1 -action - ', action)
  if (action.type === CHANGE_DATE_RANGE) {
    return {
      fromDate: action.payload.fromDate,
      toDate: action.payload.toDate
    }
  } else {
    return range
  }
}
