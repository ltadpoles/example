import React from 'react'
import ReactDom from 'react-dom'
import { EventEmitter } from 'events'

const emitter = new EventEmitter()

class ComponentA extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: ''
        }
    }
    componentDidMount() {
        // 组件装载后添加自定义事件
        this.eventEmitter = emitter.addListener('outputValue', msg => {
            this.setState({msg})
        })
    }
    componentWillUnmount() {
        // 组件销毁前移除事件监听
        emitter.removeListener(this.eventEmitter)
    }
    render() {
        return (
            <div>
                这是组件A
                <div>组件B传递过来的数据：{ this.state.msg }</div>
            </div>
        )
    }
}

class ComponentB extends React.Component {
    constructor(props) {
        super(props)
        this.state = {value: ''}
    }
    valueChange = (data) => {
        this.setState({
            value: data.target.value
        })
    }
    btnClick = () => {
        // 触发自定义事件
        emitter.emit('outputValue', this.state.value)
    }
    render() {
        return (
            <div>
                这是组件B
                <br />
                <input value={this.state.value} onChange={this.valueChange}></input>
                <br />
                <button onClick={this.btnClick}>点击我传递信息</button>
            </div>
            
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <ComponentA />
                <br />
                <ComponentB />
            </div>
        )
    }
}

ReactDom.render(<App />, document.getElementById('app'))
