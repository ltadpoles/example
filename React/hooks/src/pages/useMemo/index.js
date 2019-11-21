import React, { useState, useCallback, useMemo } from 'react';

// useCallback 返回的是一个函数 useMemo 返回的是一个值
// 使用方式和 useEffect 基本一致，第二个参数是依赖项 如果是空数组，那么将只在组件首次加载和卸载的时候触发
// 如果没有提供依赖项数组，每次渲染时都会触发
// 不要在这个函数内部执行与渲染无关的操作，诸如副作用这类的操作

function getConsole(a) {
    console.log(a)
}

const UseMemo = () => {
    const [a, setA] = useState(1)
    const [b, setB] = useState(10)
    const consoleCallback = useCallback(() => getConsole(a), [a])   
    console.log(consoleCallback)
    const consoleMemo = useMemo(() => getConsole(b), [])
    // console.log(a)
    // console.log(b)
    return (
        <>
            <div>A: {a}</div>
            <div>B: {b}</div>
            {/* <button onClick={() => setB(a + 1)}>click</button> */}
            <button onClick={()=>setB(b + 1)}>click</button>
        </>
    )
}

export default UseMemo