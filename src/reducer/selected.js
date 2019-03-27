import { SELECTED_ARTICLES } from '../constants'

export default (state = [], action) => (action.type === SELECTED_ARTICLES ? action.payload : state)
