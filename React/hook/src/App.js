import React, { useState, useRef, useEffect } from 'react'

const App = (props) => {
    const [count, setCount] = useState(0)

    const prevCountRef = useRef()
    useEffect(() => {
        prevCountRef.current = count
    })
    const prevCount = prevCountRef.current

    return (
        <>
            <h1>
                Now: {count}, before: {prevCount}
            </h1>
            <button onClick={() => setCount(count + 1)}>click</button>
        </>
    )
}
 
export default App