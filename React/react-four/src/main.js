import React from 'react'
import ReactDom from 'react-dom'


class Dv extends React.Component {
    constructor(props) {
        super(props)
    }
    getTxt = () => {
        console.log(123)
    }
    render() {
        return (
            <div>test</div>
        )
    }
}

ReactDom.render(<Dv />, document.getElementById('app'))