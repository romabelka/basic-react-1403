import React from 'react'
import ReactDOM from 'react-dom'
import articles from './fixtures'
import App from './components/app'

ReactDOM.render(<App articles={articles} />, document.getElementById('root'))
