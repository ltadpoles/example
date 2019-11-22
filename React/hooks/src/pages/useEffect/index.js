// 可以把 useEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合
// Hook 使用了 JavaScript 的闭包机制
// 默认情况下，它在第一次渲染之后和每次更新之后都会执行
// 与 componentDidMount 或 componentDidUpdate 不同，使用 useEffect 调度的 effect 不会阻塞浏览器更新屏幕,也就是说它是异步的
// 可以使用多个 effect 用来分离不同的逻辑（比如按照不同的用途）

// 如果只想在更新的时候运行 effect ，那么可以使用一个可变的 ref 手动存储一个 boolean 值来判断

import React, { useState, useEffect } from 'react'

const UseEffect = () => {
    let [count, setCount] = useState(0)
    useEffect(() => {
        console.log('方法执行了')
        // 在 useEffect 中返回一个函数，这是 effect 中的可选清除机制，默认情况下只要 state 变化或者组件卸载都会执行，在这里可以清除副作用
        return () => {
            console.log('方法解绑了')
        }
    })
    // 我们可以通过跳过 effect 实现性能优化，接受第二个参数是一个数组
    // 这个数组中需要列出 effect 中所有需要的依赖，如果依赖于之前的 state 相比较并没有变化，那么将跳过此次执行（内部通过 Object.is()进行比较）
    // 如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（[]）作为第二个参数
    useEffect(() => {
        // effect 内部的 props 和 state 就会一直拥有其初始值
        count++ // 这里还是会影响全局的 count，但是 React 会等待浏览器完成画面渲染之后才会延迟调用 useEffect，所以首次渲染的还是0
        console.log(`这个只是在初始渲染和卸载的时候触发====${count}`) // 这里已经是计算之后的结果了
    }, [])
    return (
        <div>
            <div>这个是 UseEffect 中的 count: {count}</div>
            <button onClick={() => setCount(count + 1)}>click</button>
        </div>
    )
}

export default UseEffect
