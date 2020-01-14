function Person(){}
Person.prototype = {}
console.log(Person.prototype.constructor == Person)

class Person1 {}
Person1.prototype = {}
console.log(Person1.prototype.constructor == Person1)

// 出现这个问题的原因
console.log(Object.getOwnPropertyDescriptor(Person, 'prototype'))
// { value: {}, writable: true, enumerable: false, configurable: false }

console.log(Object.getOwnPropertyDescriptor(Person1, 'prototype'))
// { value: Person1 {}, writable: false, enumerable: false, configurable: false }

// 因为 writable 为 false，所以不能重写 class 的 prototype 属性；不可写