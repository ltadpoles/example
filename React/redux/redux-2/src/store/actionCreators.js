// 改变的方法
import { INPUT_CHANGE, BTN_CLICK, DEL_CLICK } from './actionType'

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