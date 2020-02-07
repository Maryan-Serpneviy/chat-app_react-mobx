import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'mobx-react'
import store from '~s'
import App from '~cn/App'
import './index.scss'

const app = (
   <Provider store={store}>
      <Router>
         <Route path="/" component={App} />
      </Router>
   </Provider>
)

ReactDOM.render(app, document.querySelector('#root'))
