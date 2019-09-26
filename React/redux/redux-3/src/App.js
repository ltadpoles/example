import React, { Component } from 'react'
import axios from 'axios'
import store from './store'
import AppUi from './AppUi'
import { inputChangeAction, addItemAction, delItemAction, getListAction } from './store/actionCreators'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        store.subscribe(this.storeChange)
    }
    inputChange = e => {
        store.dispatch(inputChangeAction(e.target.value))
    }
    storeChange = () => {
        this.setState(store.getState())
    }
    addItem = () => {
        store.dispatch(addItemAction())
    }
    delItem = index => {
        store.dispatch(delItemAction(index))
    }
    componentDidMount() {
        axios.get('/src/data.json').then(res => {
            store.dispatch(getListAction(res.data))
        })
    }
    render() { 
        return ( 
            <AppUi 
                inputValue={this.state.inputValue}
                list={this.state.list}
                inputChange={this.inputChange}
                addItem={this.addItem}
                delItem={this.delItem}
            />
         );
    }
}
 
export default App;