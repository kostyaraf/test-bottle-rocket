import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// import store from './app/store';
import store from './store/store'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import './assets/scss/index.scss'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// <React.StrictMode>
{
  /* <Provider store={store}>
   <App />
 </Provider> */
}
// </React.StrictMode>,
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
