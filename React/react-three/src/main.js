import React from 'react'
import ReactDom from 'react-dom'
import axios from 'axios'

class Dv extends React.Component {
    constructor(props) {
        console.warn('组件生命周期：constructor')
        super(props)
        this.state = { name: 'tadpole', age: 17 }
    }

    // static getDerivedStateFromProps(props, state) {
    //     console.warn('组件生命周期：getDerivedStateFromProps')
    //     if (props.age !== state.age) {
    //         return {
    //             age: props.age
    //         }
    //     }
    //     return null
    // }
    // UNSAFE_componentWillMount() {
    //     console.warn('组件生命周期：UNSAFE_componentWillMount')
    // }

    render() {
        console.warn('组件生命周期：render')
        return (
            <div>
                <div>Hello,我叫 {this.state.name} , 今年 {this.state.age} 岁了</div>
                <ul>
                    {this.state.list.some(res => {})}
                </ul>
            </div>
        )
    }

    componentDidMount() {
        console.warn('组件生命周期：componentDidMount')
        this.setState({
            name: 'tadpole 1号',
            age: 19
        })
        axios.get('/src/test.json').then(res => {
            console.log(res)
            this.setState({
                list: res.data.list
            })
            console.log(this.state)
        })
    }
    
}

ReactDom.render(<Dv age={18}/>, document.getElementById('app'))