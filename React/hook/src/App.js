import React, { useState, useEffect } from 'react'

function App() {
    // console.log(useState())

    // useState 是一个函数，返回值是一个数组

    // React Hooks不能出现在条件判断语句中，因为它必须有完全一样的渲染顺序
    let [count, setCount] = useState(2)

    // state 数据每一次变化的时候都会去调用这个函数

    // useEffect 中定义的函数的执行不会阻碍浏览器更新视图，也就是说这些函数时异步执行的

    // 每次状态发生变化，useEffect都进行了解绑
    // 可以使用 useEffect 的第二个参数，数组中可以写入很多状态对应的变量，当状态值发生变化时，我们才进行解绑。但是当传空数组[]时，就是当组件将被销毁时才进行解绑
    useEffect(() => {
        console.log(this) // undefined
        console.log('count的值变化了')
        return () => {
            console.log('解绑了')
        }
    }, [5])

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>{setCount(count + 1)}}>click me</button>
        </div>
    )
}

export default App
