import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import { Provider } from 'react-redux' //提供器的导入
import store from './store'

const Apps = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDom.render(Apps, document.getElementById('app'))