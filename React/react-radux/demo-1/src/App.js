import React, { Component } from 'react'
import Appui from './Appui'
import { inputChangeAction, addItemAction, delItemAction, getListData } from './store/actionCreators';
import { connect } from 'react-redux'

class App extends Component {
    componentDidMount() {
        this.props.getList()
    }
    render() { 
        return ( 
            <Appui 
                inputValue={this.props.inputValue}
                list={this.props.list}
                inputChange={this.props.inputChange}
                addItem={this.props.addItem}
                delItem={this.props.delItem}
            />
         );
    }
}

const stateToProps = state => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const dispatchToProps = dispatch => {
    return {
        inputChange(e) {
            dispatch(inputChangeAction(e.target.value))
        },
        addItem() {
            dispatch(addItemAction())
        },
        delItem(index) {
            dispatch(delItemAction(index))
        },
        getList() {
            dispatch(getListData())
        }
    }
}
 
export default connect(stateToProps, dispatchToProps)(App);