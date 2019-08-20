import React from 'react'
import ReactDom from 'react-dom'

function Login(props) {
    return (
        <button onClick={props.onClick}>去登陆</button>
    )
}

function Registered(props) {
    return (
        <button onClick={props.onClick}>去注册</button>
    )
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props)
        this.handelLogin = this.handelLogin.bind(this)
        this.handelReginstered = this.handelReginstered.bind(this)
        this.state = {
            isLogin: false
        }
    }

    handelLogin() {
        this.setState({isLogin: true})
    }

    handelReginstered() {
        this.setState({isLogin: false})
    }

    render() {
        const isLogin = this.state.isLogin
        let button 

        if(isLogin) {
            button = <Login onClick={this.handelReginstered}></Login>
        } else {
            button = <Registered onClick={this.handelLogin}></Registered>
        }
        return (
            <div>
                <div>
                    <input placeholder={isLogin ? '注册用户名': '登陆用户名'}></input>
                </div>
                {button}
            </div>
        )
    }
}

ReactDom.render(<LoginControl />, document.getElementById('app'))