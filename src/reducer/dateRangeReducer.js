import { UPDATE_RANGE } from '../constants'
import { DateUtils } from 'react-day-picker'

export default (dateRangeState = { from: null, to: null }, action) => {
  const { type, payload } = action

  switch (type) {
    case UPDATE_RANGE:
      console.log(`State was: ${JSON.stringify(dateRangeState)}`)
      const newRange = DateUtils.addDayToRange(payload.day, dateRangeState)
      console.log(`State changed to: ${JSON.stringify(newRange)}`)
      return newRange

    default:
      return dateRangeState
  }
}
