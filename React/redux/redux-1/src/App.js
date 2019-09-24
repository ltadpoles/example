import React, { Component } from 'react';
import store from './store'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        store.subscribe(this.storeChange)
    }
    inputChange = (e) => {
        const action = {
            type: 'changeInput',
            value: e.target.value
        }
        store.dispatch(action)
    }
    storeChange = () => {
        this.setState(store.getState())
    }
    addList = () => {
        const action = {
            type: 'btnClick'
        }
        store.dispatch(action)
    } 
    delItem(index) {
        const action = {
            type: 'delClick',
            index
        }
        store.dispatch(action)
    }
    render() { 
        return ( 
            <div>
                <div>
                    <input value={this.state.inputValue} onChange={this.inputChange}></input>
                    <button style={{'marginLeft': '10px'}} onClick={this.addList}>click me</button>
                </div>
                <div>
                    <ul>
                        {
                            this.state.list.map((res, index) => (
                                // 给每个 li 元素添加事件
                                // 这是直接写 onClick={this.delItem(index)} 会直接执行函数，所以使用 bind 传参
                                <li key={index} onClick={this.delItem.bind(this, index)}>{res}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
         );
    }
}
 
export default App;