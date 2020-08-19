// 使返回值的类型与传入参数的类型相同
function identity<T>(arg: T): T {
    // console.log(arg.length) // 这样会报错 因为有些类型是没有length属性的 比如 number
    return arg
}

// function identity1<T>(arg: T[]): T[] {
function identity1<T>(arg: Array<T>): Array<T> {
    console.log(arg)
    return arg
}

// 泛型函数
let identity2: <T>(arg: T) => T = identity

// 泛型接口
interface Generic {
    <T>(arg: T): T
}

function identity3<T>(arg: T): T {
    return arg
}

let myIdentity: Generic = identity3

// 泛型类
class ident<T> {
    value: T
    getValue: (x: T, y: T) => T
}

var test = new ident<number>()
test.value = 1
test.getValue(1, 2)

// 泛型约束 使用 extends 与 接口interface实现
interface type {
    length: number
}

function logging<T extends type>(arg: T): T {
    console.log(arg) // 因为直接约束了就不存在报错了（不再使用于任意类型）
    return arg
}
