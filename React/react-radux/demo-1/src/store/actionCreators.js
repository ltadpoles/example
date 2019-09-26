import { INPUT_CHANGE, ADD_ITEM, DEL_ITEM, GET_LIST } from "./actionType";

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
