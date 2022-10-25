import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'
import './bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom';
import "./i18n";

ReactDOM.render(
  <Suspense fallback={null}>
  <BrowserRouter >
  <Provider store={store}>
    <App />
  </Provider>,
  </BrowserRouter>
  </Suspense>,
  document.getElementById('root')
)
