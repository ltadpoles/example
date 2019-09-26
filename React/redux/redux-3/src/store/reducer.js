import { INPUT_CHANGE, ADD_ITEM, DEL_ITEM, GET_LIST } from "./actionType"

const defaultStore = {
    inputValue: '',
    list: []
}

export default (state = defaultStore, action) => {
    if(action.type === INPUT_CHANGE) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if(action.type === ADD_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        if(!newState.inputValue) {
            alert('请至少输入一个值')
            return state
        }
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if(action.type === DEL_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }
    if(action.type === GET_LIST) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.data.inputValue
        newState.list = action.data.list
        return newState
    }
    return state
}