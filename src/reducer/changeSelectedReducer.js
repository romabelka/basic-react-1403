import { CHANGE_SELECTED } from '../constants'

export default (selectedState = [], action) => {
  const { type, payload } = action

  switch (type) {
    case CHANGE_SELECTED:
      return payload.selected
    default:
      return selectedState
  }
}
