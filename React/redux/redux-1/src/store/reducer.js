const defaultState = {
    inputValue: '请输入',
    list: [
        '第一条测试数据',
        '第二条测试数据',
        '第三条测试数据'
    ]
}

export default (state = defaultState, action) => {
    console.log(state, action)
    if(action.type === 'changeInput'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if(action.type === 'btnClick') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    return state
}