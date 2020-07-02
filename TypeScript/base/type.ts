// 各种基础类型声明方式

// let isShow: boolean = false;
// let num: number = 5;
// let user: string = 'tadpole';

// 这样也是合法的
// ub = '123';
// var ub: string;

// 模板字符串

// let user = 'tadpole';
// let age = 18;

// let sentence: string = `Hello, my name is ${user}, I'm ${age} years old`;

// 声明数组的方式

// let arr: number[] = [1, 2, 3];
// let arr1: Array<number> = [1, 2, 3];

// 元组：允许表示一个已知元素数量和类型的数组

// let arr: [string, number] = ['tadpole', 123];
// // // 这样会报错 因为初始化数组中并没有arr[2],但是还是可以编译出来正确结果的(包括类型与初始设置的并不一致)
// arr[3] = 3456;
// arr[1] = true

// enum 类型: 可以自定义元素编号（默认是从0开始） 取值也是一样可以从元素编号处拿到

// enum Color {
//     Blue,
//     Red,
//     Green,
// }

// enum Color {
//     Blue = 1,
//     Red,
//     Green,
// }

// // let c: Color = Color.Red;
// let c: string = Color[1];
// console.log(c);

// any 类型: 可以赋值为任意类型
// let user: any = 'tadpole';
// user = 123;
// user = true;

// never 类型：表示用不存在的值得类型
// never 是任何类型的子类型，也可以赋值给任何类型；没有类型是 never 的子类型或可以赋值给 never 类型（自身除外），any 也不能赋值给 never

// // 存在无法到达的终点 比如抛出错误或者死循环
// function error(msg: string): never {
//     throw new Error(msg);
// }

// function infiniteLoop(): never {
//     while (true) {}
// }

//---------------------------------------------------------------------------------------------------------------------
// 非原始类型：Object

// 接收一个非原始类型参数或者 null 没有返回值
// declare function creat(o: object | null): void

// 这样会报错 可以使用断言的方式

interface Foo {
    bar: string
    bas: number
}

const foo = {} as Foo
foo.bar = '123'
foo.bas = 1213

type CardinalDirection = 'East' | 'North' | 'South' | 'West'

function move(distance: number, direction?: CardinalDirection): void {}

move(1, 'East')
move(3)

function addObj(str: string): object {
    let obj: object = {}
    obj[str] = str
    return obj
}

// let bar: {
//     readonly bar: 'tadpole'
// }

// let a1 = bar

// let iTakeSomething = (x: (err: Error, data: any) => void) => {}
// iTakeSomething((err, data) => null)

// type test = (err, data) => void

// let testt: test = (err, data) => 2

// const Foo: {
//     [index: string]: { message: string }
// } = {}

// Foo['name'] = {message: 'tadpole'}

// 所有明确的成员必须符合索引签名的类型
interface Foom {
    [index: string]: string,
    name: string,
    age: string
}