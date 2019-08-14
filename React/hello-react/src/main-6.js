// 引入 react 
import React from 'react'
import ReactDOM from 'react-dom'


// class 有状态组件

class Hello extends React.Component {
    constructor(props) {
        // 通过 props 传递组件的数据
        super(props)
        // state 是 react 约定用来管理组件内部数据的固定的属性
        // 注意点：
        // 1. 在 constructor 中初始化 state
        // 2. 为了提高页面的渲染效率，不要将不需要在页面中展示的数据添加到 state 中，直接添加给 this 即可
        // 3. 默认情况下， state 的值为 null
        // 4. state 可以修改
        this.state = {
            age: 18,
            hobby: ['game', 'basketball']
        }
    }
    render() {
        this.state.age = 17;
        return(
            <div>
                <p>Hello, React</p>
                <p>我叫 { this.props.name }, 今年 { this.state.age } </p>
                <p>我的爱好是 { this.state.hobby }</p>
            </div>
        )
    }
}

// 渲染
ReactDOM.render(<Hello name='tadpole'></Hello>, document.getElementById('app'))