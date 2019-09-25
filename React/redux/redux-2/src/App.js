import React, { Component } from 'react'
import store from './store'
import { changeInputAction, addItemAction, delItemAction } from './store/actionCreators'
import AppUi from './appUi'

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
            <AppUi
                inputValue={this.state.inputValue}
                list={this.state.list}
                inputChange={this.inputChange}
                btnClick={this.btnClick}
                delClick={this.delClick}
            />
         );
    }
}
 
export default App;