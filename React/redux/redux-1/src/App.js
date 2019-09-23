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
                                <li key={index}>{res}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
         );
    }
}
 
export default App;