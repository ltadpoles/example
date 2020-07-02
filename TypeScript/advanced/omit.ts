// // 首先获取接口中的所有属性
// export type Pick<T, K extends keyof T> = {
//     [P in K]: T[P]
// }

// 找出传入类型不同的部分
export type Exclude<T, U> = T extends U ? never : T

export type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>

// 检验

export interface User {
    name: string
    age: number
    sex: string
}
// 相当于 type OmitUser = {age: number, sex: string}
type OmitUser = Omit<User, 'name'>
