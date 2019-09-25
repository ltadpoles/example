import { INPUT_CHANGE, ADD_ITEM, DEL_ITEM } from './actionType'

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