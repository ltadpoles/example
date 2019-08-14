// 引入react
import React from 'react'
import ReactDom from 'react-dom'

// 创建 react 元素

// 注意点： 
// 1. 使用 class 的组件继承自 React.Component
// 2. 必须有一个 render 方法
// 3. render 方法中必须有 return 要么返回一段内容，要么返回 null 不能为空
// 4. 在 方法中，通过 this.props 获取到传递给组件的数据

class Hello extends React.Component {
    render() {
        return (
            <div>
                <p>Hello, React  这是通过class创建的组件</p>
                <p>{ this.props.name }</p>
            </div>
        )
    }
}


// 渲染虚拟 DOM

ReactDom.render(<Hello name='tadpole'></Hello>, document.getElementById('app'))