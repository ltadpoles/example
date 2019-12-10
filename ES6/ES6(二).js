// 数组扁平化的几种方式


// 1. 递归
// function flatten(arr) {
//     let result = []
//     for(let i = 0; i < arr.length; i++) {
//         if(Array.isArray(arr[i])) {
//             result = result.concat(flatten(arr[i]))
//         } else {
//             result.push(arr[i])
//         }
//     }
//     return result
// }

// console.log(flatten([1, 2, [3, [4, 5]]])) // [1, 2, 3, 4, 5]

// 2. 借助 reduce 遍历
// function flatten(arr) {
//     return arr.reduce((acc, cur) => {
//         return acc.concat(Array.isArray(cur) ? flatten(cur) : cur)
//     }, [])
// }

// console.log(flatten([1, 2, [3, [4, 5]]])) // [1, 2, 3, 4, 5]

// 3. ES6 的拓展运算符
// function flatten(arr) {
//     while(arr.some(res => Array.isArray(res))) {
//         arr = [].concat(...arr)
//     }
//     return arr
// }

// console.log(flatten([1, 2, [3, , [4, 5]]]))

// 4. 借助 apply/call
// function flatten(arr) {
//     while(arr.some(res => Array.isArray(res))) {
//         arr = Function.apply.call([].concat, [], arr)
//     }
//     return arr
// }

// console.log(flatten([1, 2, , [3, [4, 5]]]))

// 5. ES6 flat 方法

// console.log([1, 2, [3, , [4, 5]]].flat(Infinity))

