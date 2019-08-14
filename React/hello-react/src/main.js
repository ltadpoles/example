// 引入 react 
import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'


class Hello extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            age: 18,
            hobby: ['game', 'basketball', 'music']
        }
    }
    render() {
        this.state.age = 17;
        return(
            <div>
                <p>Hello, React</p>
                <p>我叫 { this.props.name }, 今年 { this.state.age } </p>
                <p>我的爱好是</p>
                {/* 使用行内样式 */}
                <ul style={ {listStyle: 'none', margin: 0, padding: 0} } className='cla'>
                   { 
                        this.state.hobby.map((res,index) => {
                            return <li style={ {marginBottom: '10px'} } key={ index }>{ res }</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

// 渲染
ReactDOM.render(<Hello name='tadpole'></Hello>, document.getElementById('app'))