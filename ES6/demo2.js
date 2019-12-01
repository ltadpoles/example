// 新增与 indexof 类似的方法
let b = 'abcd'

b.includes('a') // true
b.startsWith('a') // true
b.endsWith('c') // false
b.endsWith('d') // true

// 字符串重复方法

let a = 'tadpole'
a.repeat(2) // tadpoletadpole

// isNaN 和 Number.isNaN 的区别

isNaN(123)  // false
Number.isNaN(123) // false

isNaN(NaN) // true
Number.isNaN(NaN) //true

isNaN('abc')  // true
Number.isNaN('abc') // false
