import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import articles from './fixtures'
import App from './components/app'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <App articles={articles} />
  </Provider>,
  document.getElementById('root')
)
