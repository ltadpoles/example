import React from 'react'
import ReactDom from 'react-dom'

// 创建一个Context对象
const InitContext = React.createContext()

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            // 使用一个 Provider 来将当前的 theme 传递给以下的组件树
            <InitContext.Provider value='tadpole'>
                <Child />
            </InitContext.Provider>
        )
    }
}

function Child(props) {
    return (
        // <InitContext.Provider value={{name: 'ltadpole'}}>
            <LastComponent />
        // </InitContext.Provider>
    )
}

class LastComponent extends React.Component {
    // 指定 contextType 读取当前的  context
    static contextType = InitContext
    render() {
        console.log(this.context)
        return (
            <div>name: {this.context}</div>
        )
    }
}

ReactDom.render(<App />, document.getElementById('app'))