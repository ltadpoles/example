// class Person {
//     constructor(name, age) {
//         this._name = name
//         this.age = age
//     }
//     say() {
//         console.log('Hello, My name is ' + this.name)
//     }
//     get name() {
//         // return this.name // 这样会形成死循环
//         return this._name
//     }
// }

// let person = new Person('游荡de蝌蚪', 18)

// console.log(person.name)
// console.log(person.age)
// console.log(person.say())

// console.log(Foo) // 报错 不能再声明之前使用
// class Foo {}

// class Person {
//     constructor(name) {
//         this.name = name
//     }
//     say() {
//         console.log(`My name is${this.name}`)
//     }

//     static hello() {
//         console.log('Hello World')
//     }
// }

// let person = new Person('游荡de蝌蚪')

// person.say() // My name is 游荡de蝌蚪
// // person.hello() // 报错 person.hello is not a function

// // 直接通过类来调用
// Person.hello() // Hello World

// class Person {
//     name = '游荡de蝌蚪'
//     static say() {
//         console.log(this.name)
//     }
// }

// class Bar extends Person{
//     constructor() {
//         super(this)
//     }
// }

// Bar.say()

// class Bar {
//     name = 'tadpole'
//     static say1() {
//         console.log(3)
//     }
//     say() {
//         console.log(1)
//     }

//     _init() {
//         console.log(2)
//     }
// }

// // Bar._init()
// console.log(Bar.name)
// Bar.say1()
// let baz = new Bar()

// baz._init()
// console.log(baz.name)


// new target 可以判断是不是通过 new 创建的实例
// function Person() {
//     if (new.target === void 0) {
//         console.log(1)
//     } else {
//         console.log(2)
//     }
// }

// let person1 = Person()
// let person2 = new Person()

// console.log(person1)

// class 中的new.target指向的就是类本身
// class Rectangle {
//     constructor(length, width) {
//         console.log(new.target === Rectangle)
//         this.length = length
//         this.width = width
//     }
// }

// var obj = new Rectangle(3, 4)

// class Rectangle {
//     constructor(length) {
//         console.log(new.target)
//     }
// }

// 子类继承 new.target 指向的就是子类
// class Square extends Rectangle {
//     constructor(length) {
//         super(length)
//     }
// }

// var obj = new Square(3)

// let Person = class {
//     constructor(name) {
//         this.name = name
//     }
//     say() {
//         console.log(this.name)
//     }
// }

// let p = new Person('游荡de蝌蚪')

// p.say()

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