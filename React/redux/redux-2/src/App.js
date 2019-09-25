import React, { Component } from 'react'
import axios from 'axios'
import store from './store'
import { changeInputAction, addItemAction, delItemAction, getListAction } from './store/actionCreators'
import AppUi from './appUi'
import { GET_LIST } from './store/actionType'

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
    btnClick = (e) => {
        store.dispatch(addItemAction())
    }
    delClick(index) {
        store.dispatch(delItemAction(index))
    }
    componentDidMount() {
        axios.get('src/data.json').then(res => {
            store.dispatch(getListAction(res.data))
        })
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