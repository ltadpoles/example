// // 基础：定义函数参数类型以及返回值
// function add(x: number, y: number): number {
//     return x + y;
// }
// // 在函数和返回值类型之前使用( =>)符号
// let add1: (x: number, y: number) => number = function (x: number, y: number): number {
//     return x + y;
// };

// // TypeScript里的每个函数参数都是必须的
// function buildName(firstName: string, lastName: string) {
//     return firstName + ' ' + lastName;
// }

// buildName('tadpole', 'ltadpole')
// // 下面这两个方式都是会抛出错误
// // buildName('tadpole')
// // buildName('tadpole', 'ltadpole', 'Json')

// --------------------------------------------------------------------------------------------------------
// // 可以使用 ? 指定可选参数，但是不能超过或小于参数个数
// // 必选参数不能位于可选参数之后

// function add(x?: number, y: number, z: number) {
//     return x + y + z;
// }

// // 这是可以的
// add(1, 2, 3)
// add(1, 2)
// // 这些都是不合法的
// add(1, 2, 3, 4)
// add(1)

// ------------------------------------------------------------------------------------------------
// 默认参数
// function add(x: number, y = 2) {
//     return x + y;
// }

// add(1, 2)
// add(1)
// 默认参数如果在前，那么必须使用 undefined 为其站位
// function add(x = 1, y: number) {
//     return x + y;
// }

// // 这两种都是合法的，参数个数不一致就会报错
// add(1, 2)
// add(undefined, 2)

// ----------------------------------------------------------------------------------------------------
// // 剩余参数 使用拓展操作符 ... 需要注意的是 参数个数还是不能少于指定的个数
// function add(x: number, y: number, ...arr: number[]) {
//     let num = arr.reduce((a: number, b: number): number => {
//         return a + b;
//     }, 0);
//     let result = x + y + num;
//     return result;
// }

// let result1 = add(1, 2, 3, 4, 5, 6, 7)
// console.log(result1)
