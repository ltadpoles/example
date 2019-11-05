import React, { useState, useEffect } from 'react'

function App(props) {
    // Hook 是一些可以让你在函数组件里“钩入” React state 及生命周期等特性的函数。Hook 不能在 class 组件中使用
    // 只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用
    // 只能在 React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用
    // Hook 是一种复用状态逻辑的方式，它不复用 state 本身,Hook 的每次调用都有一个完全独立的 state

    // 自定义 Hook
    // 如果函数的名字以 “use” 开头并调用其他 Hook，我们就说这是一个自定义 Hook

    // useState 是一个函数，返回值是一个数组

    // React Hooks不能出现在条件判断语句中，因为它必须有完全一样的渲染顺序
    // 可以多次声明
    let [count, setCount] = useState(2)
    let [fruit, setFruit] = useState('banana')
    let [todos, setTodos] = useState([{ text: 'Learn Hooks' }])

    // 副作用：在 React 组件中执行数据获取、订阅或者手动修改 DOM。我们统一把这些操作称为“副作用”，或者简称为“作用”

    // state 数据每一次变化的时候都会去调用 useEffect 函数，第一次渲染也会调用

    // useEffect 中定义的函数的执行不会阻碍浏览器更新视图，也就是说这些函数时异步执行的
    // 它跟 class 组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 具有相同的用途，只不过被合并成了一个 API

    // 每次状态发生变化，useEffect都进行了解绑
    // 可以使用 useEffect 的第二个参数，数组中可以写入很多状态对应的变量，当状态值发生变化时，我们才进行解绑。但是当传空数组[]时，就是当组件将被销毁时才进行解绑

    useEffect(() => {
        console.log(this) // undefined
        console.log(props)
        console.log('count的值变化了')
        return () => {
            console.log('解绑了')
        }
    })

    return (
        <div>
            <p>You clicked {count} times</p>
            <button
                onClick={() => {
                    setCount(count + 1)
                }}
            >
                click me
            </button>
        </div>
    )
}

export default App
