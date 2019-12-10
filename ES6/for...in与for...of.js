// let arr = [3, 5, 7]
// let obj = {
//     a: 1,
//     b: 2,
//     c: function() {
//         console.log('游荡de蝌蚪')
//     }
// }

// arr.name = 'Array'

// for(let i in arr) {
//     console.log(i) // 0 1 2 name
// }


// // for...of 可以中断循环
// for (let i of arr) {
//     if (i === 7) {
//         break
//     }
//     console.log(i) // 3 5 7
// }

// Object.prototype.say = function() {
//     console.log('Hello')
// }
// for(let i in obj) {
//     console.log(i) // a b c say 遍历出了原型上面的属性
// }

// for(let i of obj) {
//     console.log(i) // obj is not iterable
// }


// let obj = {
//     name: '游荡de蝌蚪',
//     age: 18
// }


// obj[Symbol.iterator] = function*(){
//     var keys = Object.keys(obj);
//     for(var k of keys){
//         yield obj[k]
//     }
// };


// for(let i of obj) {
//     console.log(i) // 游荡de蝌蚪 18
// }