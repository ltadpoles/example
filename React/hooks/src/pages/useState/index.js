// useState 是一个函数，返回值是一个数组(当前 state 以及更新 state 的函数), 唯一的参数就是初始 state
// useState 是一种新方法，它与 class 里面的 this.state 提供的功能完全相同
// 初始渲染期间，返回的状态 (state) 与传入的第一个参数值相同
// setState 函数用于更新 state。它接收一个新的 state 值并将组件的一次重新渲染加入队列
// initialState 只会在初识渲染中起作用，后续会被忽略，如果传入一个函数就只会在初始渲染时被调用
// 更新 state 变量总是替换它而不是合并它，this.setstate()会自动合并
// 可以多次声明

// const [state, setstate] = useState(initialState)

import React, { useState } from 'react'

let showFruit = true

const UseState = () => {
    const [count, setCount] = useState(0)

    // 最好的方式就是按照粒度区分 state, 后一种方式更好
    // const [state, setState] = useState({ left: 0, top: 0, width: 100, height: 100 })

    // const [options, setOptions] = useState({ left: 0, top: 0 })
    // const [box, setBox] = useState({width: 0, height: 0})

    // setCount(prevState => {
    //     // 这里可以拿到变化之前的值
    //     console.log(prevState)
    // })

    // react规定我们必须把hooks写在函数的最外层，不能写在ifelse等条件语句当中，来确保hooks的执行顺序一致
    const [fruit, setFruit] = useState('banana')

    if (showFruit) {
        // const [fruit, setFruit] = useState('banana')     写在这里会报错
        showFruit = false
    }

    return (
        <>
            <div>这个是 UseState 中的 count: {count}</div>
            <button onClick={() => setCount(count + 1)}>click</button>
        </>
    )
}

export default UseState
