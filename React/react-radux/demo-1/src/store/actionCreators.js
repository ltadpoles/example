import { INPUT_CHANGE, ADD_ITEM, DEL_ITEM, GET_LIST } from "./actionType";
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

export const getListAction = (data) => ({
    type: GET_LIST,
    data
})
// 使用中间件就可以在这里发送 ajax 请求获取数据
export const getListData = () => {
    return dipatch => {
        axios.get('src/data.json').then(res => {
            dipatch(getListAction(res.data))
        })
    }
}
