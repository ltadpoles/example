// 获取某个值的 type

export const a: number = 4

// 相当于 const b: number = 3
export const b: typeof a = 3

// 可以与 keyof 连用

const colors = {
    red: 'red',
    blue: 'blue'
}

type ColorType = keyof typeof colors
