import { combineReducers } from 'redux'
import counterReducer from './counter'
import filteredArticles from './filter'
import articles from './articles'

export default combineReducers({
  counter: counterReducer,
  articles,
  filteredArticles
})
