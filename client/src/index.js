import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import 'animate.css/animate.min.css'
import reducers from './reducers'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

const store = createStore(
  reducers,
  applyMiddleware()
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'))
registerServiceWorker()
