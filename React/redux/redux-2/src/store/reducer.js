import { INPUT_CHANGE, BTN_CLICK, DEL_CLICK } from './actionType'

const defaultState = {
    inputValue: 'test',
    list: [
        '测试数据的第一条',
        '测试数据的第二条',
        '测试数据的第三条'
    ]
}

export default (state = defaultState, action) => {
    if(action.type === INPUT_CHANGE) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if(action.type === BTN_CLICK) {
        let newState = JSON.parse(JSON.stringify(state))
        if(!newState.inputValue) {
            alert("请至少输入一个值")
            return state
        }
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        console.log(newState)
        return newState
    }
    if(action.type === DEL_CLICK) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }
    return state
}