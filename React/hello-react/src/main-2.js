// 引入react
import React from 'react'
import ReactDom from 'react-dom'

// 创建 react 元素
// 使用 JSX 语法来创建 react 元素
// 注意点：
//  1 在JSX中可以直接使用JS代码，语法：{}，只有一个花括号
//  2 在JSX的花括号中，可以出现：任意的js表达式，但是不能使用 语句（for/if/switch-case）
//  3 在遍历元素的时候，需要为每一个兄弟元素指定 key 属性
//  4 JSX创建的元素中，属性也可以通过 {} 语法，比如：key={index}
//  5 JSX语法中的注释写法：{/* 注释内容 */}

let tadpole = {
    name: 'tadpole',
    age: 18
}

let arr = [1, 2, 3, 4]

const dv = (
    <div title='Hello react'>
        <p>Hello, React! JSX ! 我叫 { tadpole.name }, 今年 { tadpole.age } 岁了</p>
        <p> { arr.join('-') } </p>
        <p>
            {
                arr.map( (res, index) => {
                    return (
                        <span key={ index }>{ res }</span>
                    )
                })
            }
        </p>
    </div>
)

// 渲染虚拟 DOM
// 第一个参数： 表示渲染哪个 react 元素或组件
// 第二个参数： 表示要渲染的位置
ReactDom.render(dv, document.getElementById('app'))