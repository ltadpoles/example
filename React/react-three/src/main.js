import React from 'react'
import ReactDom from 'react-dom'

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
    //             name: 'tadpole',
    //             age: props.age
    //         }
    //     }
    //     return null
    // }
    UNSAFE_componentWillMount() {
        console.warn('组件生命周期：UNSAFE_componentWillMount')
    }

    render() {
        console.warn('组件生命周期：render')
        return (
            <div>Hello,我叫{this.state.name},今年{this.state.age}岁了</div>
        )
    }

    componentDidMount() {
        console.warn('组件生命周期：componentDidMount')
        this.setState({
            name: 'ltadpole',
            age: 19
        })
    }
    
}

ReactDom.render(<Dv age={18}/>, document.getElementById('app'))