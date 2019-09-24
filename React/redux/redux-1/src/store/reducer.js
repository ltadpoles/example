const defaultState = {
    inputValue: '请输入',
    list: [
        '第一条测试数据',
        '第二条测试数据',
        '第三条测试数据'
    ]
}

export default (state = defaultState, action) => {
    if(action.type === 'changeInput'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if(action.type === 'btnClick') {
        let newState = JSON.parse(JSON.stringify(state))
        if(!newState.inputValue) {
            alert('请至少输入一个值')
            return state
        }
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if(action.type === 'delClick') {
        let newState = JSON.parse(JSON.stringify(state))
        // 操作数组即可
        newState.list.splice(action.index, 1)
        return newState
    }
    return state
}