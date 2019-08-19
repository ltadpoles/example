import React from 'react'
import ReactDom from 'react-dom'

class Dv extends React.Component {
    constructor(prop) {
        super(prop)
        this.state = {name: 'tadpole', age: 17}
    }
    render() {
        return (
            <div>
                <div>我叫 { this.state.name },今年 { this.state.age } 岁了</div>
                <button onClick = { function() { console.log('事件触发了')} }>点我这里</button>
                <a href='#' onClick={function(e){console.log('事件触发了'); return false}}>Click me</a>
            </div>
        )
    }
}

ReactDom.render(<Dv />, document.getElementById('app'))