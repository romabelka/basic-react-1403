import { combineReducers } from 'redux'
import counterReducer from './counter'
import articles from './articles'
import select from './select'

export default combineReducers({
  counter: counterReducer,
  articles,
  select
})
