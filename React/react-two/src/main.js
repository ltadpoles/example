import React from 'react'
import ReactDom from 'react-dom'

class Text extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return null
    }
}

ReactDom.render(<Text />, document.getElementById('app'))