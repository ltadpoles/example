import React, { useContext } from 'react'

// useContext:

// 接收一个 context 对象（React.createContext 的返回值）并返回该 context 的当前值
// 当前的 context 值由上层组件中距离当前组件最近的 <MyContext.Provider> 的 value prop 决定

// useContext 的参数必须是 context 对象本身
// 调用了 useContext 的组件总会在 context 值变化时重新渲染

const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee'
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222'
    },
    red: {
        foreground: '#123456',
        background: 'red'
    }
}

const ThemeContext = React.createContext(themes.light)

function UseContext() {
    return (
        <ThemeContext.Provider value={themes.red}>
            <Toolbar />
        </ThemeContext.Provider>
    )
}

function Toolbar(props) {
    return (
        <div>
            <ThemedButton />
        </div>
    )
}

function ThemedButton() {
    const theme = useContext(ThemeContext)

    return <button style={{ background: theme.background, color: theme.foreground }}>I am styled by theme context!</button>
}

export default UseContext
