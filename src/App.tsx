import React from 'react'
import { Provider } from 'mobx-react'
import Main from '~cn/Main'
import store from '~s/store'
import './App.scss'

export default function App() {
   return (
      <Provider store={store}>
         <Main />
      </Provider>
   )
}
