import React from 'react'
import ReactDom from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Child name='tadpole' />
        )
    }
}

// 子组件

function Child(props) {
    return (
        <div>{props.name}</div>
    )
}

ReactDom.render(<App />, document.getElementById('app'))