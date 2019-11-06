import React, { useState, useEffect } from 'react'

function App(props) {
    // Hook 是一些可以让你在函数组件里“钩入” React state 及生命周期等特性的函数。Hook 不能在 class 组件中使用
    // 只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用
    // 只能在 React 的函数组件或自定义 Hook 中调用 Hook。不要在其他 JavaScript 函数中调用
    // Hook 是一种复用状态逻辑的方式，它不复用 state 本身,Hook 的每次调用都有一个完全独立的 state
    // Hook 使用了 JavaScript 的闭包机制
    // 

    // 自定义 Hook
    // 如果函数的名字以 “use” 开头并调用其他 Hook，我们就说这是一个自定义 Hook

    // useState 是一个函数，返回值是一个数组(当前 state 以及更新 state 的函数), 唯一的参数就是初始 state
    // useState 是一种新方法，它与 class 里面的 this.state 提供的功能完全相同
    // useState 可以接收一个函数，这个函数只会在首次渲染的时候触发

    // React Hooks不能出现在条件判断语句中，因为它必须有完全一样的渲染顺序

    // 可以多次声明
    let [count, setCount] = useState(2)

    // 副作用：在 React 组件中执行数据获取、订阅或者手动修改 DOM。我们统一把这些操作称为“副作用”，或者简称为“作用”

    // state 数据每一次变化的时候都会去调用 useEffect 函数，第一次渲染也会调用

    // useEffect 中定义的函数的执行不会阻碍浏览器更新视图，也就是说这些函数时异步执行的
    // 它跟 class 组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 具有相同的用途，只不过被合并成了一个 API

    // 每次状态发生变化，useEffect都进行了解绑
    // 可以使用 useEffect 的第二个参数，数组中可以写入很多状态对应的变量，当状态值发生变化时，我们才进行解绑。但是当传空数组[]时，就是当组件将被销毁时才进行解绑
    // Hook 允许我们按照代码的用途分离他们， 而不是像生命周期函数那样。React 将按照 effect 声明的顺序依次调用组件中的每一个 effect。

    useEffect(() => {
        // 在函数组件中，我们没有 this，所以我们不能分配或读取 this.state
        console.log(this) // undefined
        console.log(props)
        document.title = `You clicked ${count} times`

        // 这里返回一个函数，会在执行清除操作的时候调用。实际上每次 state 变化都会触发清除操作
        return () => {
            console.log('解绑了')
        }
    })

    // 第二个参数可用于性能优化 ，接收一个数组，只要数组中的值发生了变化，那么就会执行这个 useEffect 反之则不执行，但不影响首次渲染执行
    // 数组中需要包含所有外部作用域中会发生变化且在 effect 中使用的变量
    // 如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（[]）作为第二个参数
    let [fruit, setFruit] = useState('banana')
    useEffect(() => {
        console.log(`这是另一个 useEffect,我叫${fruit}`)
    }, [fruit])

    let [todos, setTodos] = useState([{ text: 'Learn Hooks' }])
    useEffect(() => {
        // effect 内部的 props 和 state 就会一直拥有其初始值
        count++ // 这里还是会影响全局的 count，但是 React 会等待浏览器完成画面渲染之后才会延迟调用 useEffect，所以首次渲染的还是2
        console.log(`这个只是在初始渲染和卸载的时候触发====${count}`)
        
    }, [])


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
