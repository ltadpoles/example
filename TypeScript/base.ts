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
// 6. 接口与接口之间可以有继承关系，用 extends 关键字

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
// 建议将这些声明语句放在独立的 .d.ts 文件中

// 类型别名：使用 type 定义
type Name = string
type myNumber = number
type Fn = () => void

// 字符串字面量类型用来约束取值只能是某几个字符串中的一个
// 类型别名与字符串字面量类型都是使用 type 进行定义
type Name1 = 'tadpole' | 'ltadpole' | 'Jon'

// 元组：表示一个已知元素数量和类型的数组
let arr: [number, string]
arr[0] = 2 // 可以单个赋值
arr = [1, 'tadpole'] // 当修改变量的时候，必须使数组数量和类型对应
arr.push(2)
arr.push('ltadpole')
arr.push(undefined) // undefined 和 null 是所有类型的子类型
arr.push(null)
// arr.push(true) // Error

// 枚举：成员会被赋值从0开始的递增的数字;也可以手动赋值
enum Days {
    Sun,
    Mon,
    Tue,
    Wed,
    Thu,
    Fri,
    Sat
}
Days.Sun === 0 // true
Days[0] === 'Sun' // true
enum Day {
    fir,
    sec = 2
}
// 1. 常数枚举：使用 const enum 定义的枚举类型，会在编译阶段被删除，不能包含计算成员
const enum Day1 {
    fir,
    sec
}
// 2. 外部枚举：使用 declare enum 定义的枚举类型
declare enum Day2 {
    fir,
    sec
}

// 类
// 可以使用三种访问修饰符
// public：公有的属性或方法，可以在任何地方被访问到。默认所有的属性和方法都是 public
// private: 私有的属性或方法，不能在声明的类外部使用
// protected：受保护的属性或方法，可以在自身和子类中被访问
// 当构造函数修饰为 private 时，该类不允许被继承和实例化；修饰为 protected 时，该类只能被继承
// 抽象类（abstract）：不允许被实例化；抽象类中的抽象方法必须在子类中实现
// 不同类之间可以有一些共有的特性，使用 implements 关键字来实现(比如说门有个报警功能，车也有一个报警功能)
interface Alarm {
    alert(): void
}
class Door implements Alarm {
    alert() {
        console.log('报警了')
    }
}
class Car implements Alarm {
    alert() {
        console.log('报警了')
    }
}
// 同时车还有灯光功能
interface Light {
    lightOn(): void
    lightOff(): void
}

class Car1 implements Alarm, Light {
    alert() {
        console.log('报警了')
    }
    lightOn() {
        console.log('开灯')
    }
    lightOff() {
        console.log('关灯')
    }
}
// 接口可以继承自类
class Person5 {
    x: number
    y: number
    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }
}
interface Point extends Person5 {
    z: number
}
let point: Point = { x: 1, y: 2, z: 3 }

// 装饰器：装饰器是一个对类进行处理的函数。装饰器函数的第一个参数，就是所要装饰的目标类。
// 装饰器对类的行为的改变，是代码编译时发生的，而不是在运行时 ==> 装饰器本质就是编译时执行的函数

// 交叉类型：是将多个类型合并为一个类型，它包含了所需的所有类型的特性
function extend<T, U>(first: T, secend: U): T & U {
    let result = <T & U>{}
    // 这个里面可以对result做一些操作
    return result
}

// void 与 never
// void表示没有任何类型， never 表示永远不存在的值的类型（死循环或者抛出错误）

