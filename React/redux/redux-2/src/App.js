import React, { Component } from 'react'
import store from './store'
import { changeInputAction, addItemAction, delItemAction } from './store/actionCreators'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        store.subscribe(this.storeChange)
    }
    inputChange = (e) => {
        store.dispatch(changeInputAction(e.target.value))
    }
    storeChange = () => {
        this.setState(store.getState())
    }
    btnClick = () => {
        store.dispatch(addItemAction())
    }
    delClick(index) {
        store.dispatch(delItemAction(index))
    }
    render() { 
        return ( 
            <div>
                <div>
                    <input value={this.state.inputValue} onChange={this.inputChange}></input>
                    <button style={{'marginLeft': '10px'}} onClick={this.btnClick}>click me</button>
                </div>
                <div>
                    <ul>
                        {
                            this.state.list.map((res, index) => (
                                <li key={index} onClick={this.delClick.bind(this, index)}>{res}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
         );
    }
}
 
export default App;