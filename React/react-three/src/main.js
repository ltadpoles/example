import React from 'react'
import ReactDom from 'react-dom'


class Dv extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>test</div>
        )
    }
}

ReactDom.render(<Dv />, document.getElementById('app'))