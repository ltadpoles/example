import React, { Component } from 'react'
import Appui from './Appui'
import { inputChangeAction, addItemAction, delItemAction, getListData } from './store/actionCreators';
import { connect } from 'react-redux' // 引入连接器

class App extends Component {
    componentDidMount() {
        this.props.getList()
    }
    render() { 
        const { inputValue, list, inputChange, addItem, delItem} = this.props
        return ( 
            <Appui 
                inputValue={inputValue}
                list={list}
                inputChange={inputChange}
                addItem={addItem}
                delItem={delItem}
            />
         );
    }
}


// 增添映射关系
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