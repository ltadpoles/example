import React, { useState, useEffect } from 'react'

function Text(props) {
    // Hook 是一些可以让你在函数组件里“钩入” React state 及生命周期等特性的函数。Hook 不能在 class 组件中使用
    // 只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用
    // 只能在 React 的函数组件或自定义 Hook 中调用 Hook。不要在其他 JavaScript 函数中调用
    // Hook 是一种复用状态逻辑的方式，它不复用 state 本身,Hook 的每次调用都有一个完全独立的 state
    // Hook 使用了 JavaScript 的闭包机制

    // class 组件的问题
    // 1. 在组件之间复用状态逻辑很难
    // 2. 复杂组件变得难以理解
    // 3. class 本身的一些问题

    // 自定义 Hook
    // 如果函数的名字以 “use” 开头并调用其他 Hook，我们就说这是一个自定义 Hook

    let [count, setCount] = useState(2)

    // 副作用：在 React 组件中执行数据获取、订阅或者手动修改 DOM。我们统一把这些操作称为“副作用”，或者简称为“作用”

    useEffect(() => {
        document.title = `You clicked ${count} times`

        // 这里返回一个函数，会在执行清除操作的时候调用。实际上每次 state 变化都会触发清除操作
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

export default Text
