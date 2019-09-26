import { INPUT_CHANGE, ADD_ITEM, DEL_ITEM, GET_LIST } from './actionType'
import axios from 'axios'

export const inputChangeAction = value => ({
    type: INPUT_CHANGE,
    value
})

export const addItemAction = () => ({
    type: ADD_ITEM
})

export const delItemAction = index => ({
    type: DEL_ITEM,
    index
})

export const getListAction = data => ({
    type: GET_LIST,
    data
})

// redux-thunk 中间的作用就是可以在这里返回一个函数，重新定义了 dispatch 方法
export const getLists = () => {
    return dispatch => {
        axios.get('/src/data.json').then(v => {
            dispatch(getListAction(v.data))
        })
    }
}