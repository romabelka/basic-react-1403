import { combineReducers } from 'redux'
import counterReducer from './counter'
import { filterChangeDateFromReducer, filterChangeDateToReducer, changeSelectedIds } from './filter'
import articles from './articles'

export default combineReducers({
  counter: counterReducer,
  articles,
  filterArticlesIds: changeSelectedIds,
  filterDateFrom: filterChangeDateFromReducer,
  filterDateTo: filterChangeDateToReducer
})
