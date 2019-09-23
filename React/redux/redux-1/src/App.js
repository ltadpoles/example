import React, { Component } from 'react';
import store from './store'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
    }
    render() { 
        return ( 
            <div>
                <div>
                    <input placeholder={this.state.inputValue}></input>
                    <button style={{'marginLeft': '10px'}}>click me</button>
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