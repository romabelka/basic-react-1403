import { combineReducers } from 'redux'
import counterReducer from './counter'
import {
  filterChangeDateFromReducer,
  filterChangeDateToReducer,
  changeSelectedArticles
} from './filter'
import articles from './articles'

export default combineReducers({
  counter: counterReducer,
  articles,
  filterArticlesIds: changeSelectedArticles,
  filterDateFrom: filterChangeDateFromReducer,
  filterDateTo: filterChangeDateToReducer
})
