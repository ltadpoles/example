// 引入react
import React from 'react'
import ReactDom from 'react-dom'

// 创建 react 元素

function Hello(props) {
    // props 是一个对象，里面包含了组件传递过来的所有数据
    console.log(props)

    props.fn()

    // props.hobby = 'play'

    return (
        <div title='hello react'>Hello React！我叫{ props.name },今年 { props.age } 岁了</div>
    )
}

// 渲染虚拟 DOM

ReactDom.render(<Hello name='tadpole' age='18' arr={ [1, 2, 3, 4] } obj={ {name: 'jack', age: 17} } fn={ () => console.log(1234) }></Hello>, document.getElementById('app'))

// 组件传递信息
//  1. 如果要给组件传递数据，只需要将要传递的数据作为组件的属性即可
//  2. 在组件中，通过函数的参数 props 来获取组件传过来的值
//  3. 可以给组件传递任意类型的数据
//  4. props 这个对象是只读的 不可更改