// 接收一个形如 (state, action) => newState 的 reducer，并返回当前的 state 以及与其配套的 dispatch 方法
// 如果 Reducer Hook 的返回值与当前 state 相同，React 将跳过子组件的渲染及副作用的执行（React 使用 Object.is 比较算法 来比较 state）

import React, { useReducer } from 'react'

function init(initialCount) {
    return { count: initialCount }
}

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        case 'reset':
            return init(action.payload)
        default:
            throw new Error()
    }
}

const UseReducer = () => {
    // 这里的第二个参数就是 init 函数的实参
    const [state, dispatch] = useReducer(reducer, 1, init)
    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({ type: 'reset', payload: 0 })}>Reset</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        </>
    )
}

export default UseReducer
