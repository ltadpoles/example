import React from 'react'
import ReactDom from 'react-dom'

class Dv extends React.Component {
    constructor(prop) {
        super(prop)
        this.state = {name: 'tadpole', age: 17}
    }
    render() {
        return (<div>我叫 { this.state.name },今年 { this.state.age } 岁了</div>)
    }
}

ReactDom.render(<Dv />, document.getElementById('app'))