// 引入react
import React from 'react'
import ReactDom from 'react-dom'

// 创建 react 元素
// 第一个元素： 创建 react 元素的名称
// 第二个元素： 是一个对象，用来表示创建的 react 元素属性
// 第三个元素： 表示当前元素的子节点
// 返回值： 创建好的虚拟 DOM 对象
const dv = React.createElement('div', {
    title: 'Hello react'
}, 'Hello, React!')

// 渲染虚拟 DOM
// 第一个参数： 表示渲染哪个 react 元素或组件
// 第二个参数： 表示要渲染的位置
ReactDom.render(dv, document.getElementById('app'))