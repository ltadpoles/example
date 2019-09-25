// 改变的方法
import { INPUT_CHANGE, BTN_CLICK, DEL_CLICK, GET_LIST } from './actionType'

export const changeInputAction = value => ({
    type: INPUT_CHANGE,
    value
})

export const addItemAction = () => ({
    type: BTN_CLICK
})

export const delItemAction = index => ({
    type: DEL_CLICK,
    index
})

export const getListAction = data => ({
    type: GET_LIST,
    data
})