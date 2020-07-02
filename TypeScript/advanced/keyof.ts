// 与Object.key相似 取 interface 键名
interface User {
    name: string
    age: number
}

type keys = keyof User // 相当与 type keys = 'name' | 'age'

// 应用：比如我们想要获取一个接口中的所有键值

type Parital<T> = {
    [P in keyof T]: T[P]
}

type UserInfo = Parital<User>

// 或者只想要这个接口中的某些传入的值
type ParitalOther<T, K extends keyof T> = {
    [P in K]: T[P]
}

type UserInfoOther = ParitalOther<User, 'name'>
