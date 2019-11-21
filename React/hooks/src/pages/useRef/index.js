import React, { useRef, useEffect } from 'react'

// useRef 返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数
// 返回的 ref 对象在组件的整个生命周期内保持不变
// useRef 会在每次渲染时返回同一个 ref 对象

function UseRef() {
    const count = useRef(1)
    const onButtonClick = () => {
        // 变更 .current 属性不会引发组件重新渲染
        console.log(count.current++)
        // console.log(count)
    }
    useEffect(() => {
        console.log(count)
    })
    return (
        <>
            {/* <input ref={inputEl} type='text' /> */}
            <div>count: {count.current}</div>
            <button onClick={onButtonClick}>click</button>
        </>
    )
}

export default UseRef
