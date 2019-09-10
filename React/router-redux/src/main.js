import React, { Component } from 'react'
import ReactDom from 'react-dom'

class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>test</div>
        )
    }
}

ReactDom.render(<App />, document.getElementById('app'))