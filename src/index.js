import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import App from './components/app'
import store from './store'
import history from './history'
import LocalizationProvider from './components/localization/localization-provider'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <LocalizationProvider>
        <App />
      </LocalizationProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
