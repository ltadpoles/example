import React from 'react'
import ReactDom from 'react-dom'

class Dv extends React.Component {
    constructor(props) {
        super(props)
        this.state = {data: '受控组件'}
        this.inputChange = this.inputChange.bind(this)
    }
    inputChange(data) {
        this.setState({
            data: data.target.value
        })
    }
    render() {
        return (

            // 只读: 只能读取的input框 只展示
            // <input value={this.state.data} readOnly></input>

            // change事件
            // <input value={this.state.data} onChange={this.inputChange}></input>

            // defaultValue 非受控组件
            <input defaultValue={this.state.data}></input>
        )
    }
}

ReactDom.render(<Dv />, document.getElementById('app'))