// 引入react
import React from 'react'
import ReactDom from 'react-dom'

// 创建 react 元素

// 通过 JS 中的函数创建组件 通过将函数名作为标签名称来渲染
// 注意点：
// 1. 使用函数组件的时候 必须要有 return 语句，并且必须返回内容；如果什么也不想返回，那么久需要些 return null
// 2. 组件的名称必须是大写字母开头（函数名） react 内部通过首字母大小写来判断是组件还是普通的 DOM 元素
// 3. return 的内容 最好使用小括号包裹，避免造成解析错误
// 4. 返回的 JSX 结构 必须有一个根元素

function Hello() {
    return (
        <div title='hello react'>Hello React！</div>
    )
}

// 渲染虚拟 DOM
// 第一个参数： 表示渲染哪个 react 元素或组件
// 第二个参数： 表示要渲染的位置
ReactDom.render(<Hello></Hello>, document.getElementById('app'))