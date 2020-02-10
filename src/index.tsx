import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'mobx-react'
import store from '~s'
import App from '~cn/App'
import './index.scss'

const app = (
   <Provider store={store}>
      <Router>
         <App />
      </Router>
   </Provider>
)

ReactDOM.render(app, document.querySelector('#root'))
