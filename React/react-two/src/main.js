import React from 'react'
import ReactDom from 'react-dom'

class Dv extends React.Component {
    constructor(prop) {
        super(prop)
        this.state = {name: 'tadpole', age: 17}
        // this.addAge = this.addAge.bind(this) // 绑定this
    }
    addAge() {
        this.setState({
            age: this.state.age += 1
        })
    }
    // addAge = () => {
    //     this.setState({
    //         age: this.state.age += 1
    //     })
    // }
    render() {
        return (
            <div>
                <div>我叫 { this.state.name },今年 { this.state.age } 岁了</div>
                <button onClick = { (e) => this.addAge(e) }>Click me</button>
                {/* <button onClick = { this.addAge }>Click me</button> */}
            </div>
        )
    }
}

ReactDom.render(<Dv />, document.getElementById('app'))