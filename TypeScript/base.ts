// 基础类型
// 1. 在 TypeScript中 使用 void 表示空值，一般可用于函数的返回值
function Hello(): void {
    console.log('Hello, TypeScript')
}
// 2. undefined 和 null 是所有类型的子类型, 也就是说可以将其赋值给任意类型
let str11: number = undefined
let str12: string = null
// 3. void 类型的变量只能将它赋值为 undefined 和 null

// 类型推论：
// 1.TypeScript 会在没有明确的指定类型的时候推测出一个类型
let myFavoriteNumber: string = 'seven'
// myFavoriteNumber = 7; // Error
// 2. 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查
let FavoriteNumber
FavoriteNumber = 'seven'
FavoriteNumber = 7

// 联合类型：表示取值可以为多种类型中的一种 使用 | 分隔每个类型
// 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法
let mystr: string | number
mystr = 'tadpole'
mystr = 18
// mystr = true // Error

// 接口：interface
// 1. 赋值的时候，变量的形状必须和接口的形状保持一致（也就是说不能多也不能少）
// 2. 可以使用 ? 表示可选属性（还是不允许添加未定义的属性）
interface Person {
    name: string
    age?: number
}
// 编译会出错
let tadpole: Person = {
    name: 'tadpole'
    // age: 18
}
// 3. 如果想添加任意属性(一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集)
// 4. 一个接口只能定义一个任意属性 如果任意属性中有多个确定类型，可以使用联合类型
// 下面因为 age 是number类型，所以会报错
interface Person {
    name: string
    age?: number
    // [propName: string]: string
    [propName: string]: string | number
    // [propName: string]: any
}

let tadpole1: Person = {
    name: 'tadpole',
    age: 18,
    sex: 'male'
}
// 5. 只读属性：只能在创建的时候被赋值
interface Person1 {
    readonly id: number
}

let Tom: Person1 = {
    id: 1
}
// Tom.id = 2 // Error

// 函数
// 1. 函数声明和表达式 参数个数必须是对应的
function add(x: number, y: number): number {
    return x + y
}
// 对函数两边都进行类型限制
let add1: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y
}
// 2. 可以使用 ? 表示可选参数(可选参数后面不允许再出现必需参数了)
function add2(x: number, y?: number): number {
    return x + y
}
// 3. TypeScript 会将添加了默认值的参数识别为可选参数(此时不受可选参数位置的限制)
// 4. ...rest 剩余参数：只能是最后一个参数
function add3(x: number, y: number, ...arr: number[]): number {
    let result: number = arr.reduce((a: number, b: number): number => {
        return a + b
    }, 0)
    return x + y + result
}

// 类型断言：手动指定一个值的类型(一般有以下两种表示方式)
// 断言只能在编译ts代码时有作用，不能避免运行时的错误
let person: any = 'tadpole'
let a: number = (<string>person).length
let b: number = (person as string).length // 推荐
// 1.将任何一个变量断言为 any （有时是很有用的）
// window.foo = 1 // 直接这样是会报错的
// (window as any).foo = 1

// 声明语句
declare var person1: string


