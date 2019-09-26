import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

// compose 增强函数

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}): compose
const enhancers = composeEnhancers(applyMiddleware(thunk))
// applyMiddleware: Redux的原生方法，作用是将所有中间件组成一个数组，依次执行
const store = createStore(reducer, enhancers)

export default store