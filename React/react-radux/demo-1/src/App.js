import React, { Component } from 'react'
import store from './store'
import Appui from './Appui'
import { inputChangeAction, addItemAction, delItemAction, getListAction } from './store/actionCreators';
import Axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        console.log(this.state)
        store.subscribe(this.storeChange)
    }
    inputChange = e => {
        store.dispatch(inputChangeAction(e.target.value))
    }
    addItem = () => {
        store.dispatch(addItemAction())
    }
    delItem = index => {
        store.dispatch(delItemAction(index))
    }
    storeChange = () => {
        this.setState(store.getState())
    }
    componentDidMount() {
        Axios.get('src/data.json').then(res => {
            store.dispatch(getListAction(res.data))
        })
    }
    render() { 
        return ( 
            <Appui 
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