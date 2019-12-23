// function* helloWorldGenerator() {
//     yield 'hello'
//     yield 'world'
//     return 'ending'
// }

// var hw = helloWorldGenerator()

// hw.next() // { value: 'hello', done: false }
// hw.next() // { value: 'world', done: false }
// hw.next() // { value: 'ending', done: true }

// // 惰性求值
// function* gen() {
//     yield 123 + 456
// }

// let n = gen()

// function* gen(x) {
//     console.log(1)
//     let p = x * (yield 'hello')
//     return p
// }

// // next 传递的值可以覆盖 yield 后面的默认值
// let go = gen(3)
// let it = go.next()
// console.log(it.value)
// let it1 = go.next(7)
// console.log(it1.value)

// console.log(n.next())
// console.log(n.next())

// 不能直接使用 gen().next()  这样一直是同一个结果`


// function* fn() {
//     yield 'hello'
//     yield 'world'
//     return 'stop'
// }

// function* fn1() {
//     yield 'fn1'
//     yield* fn()
// }

// function* fn2() {
//     yield 'start'
//     yield* fn1()
//     yield 'end'
// }

// for(let i of fn2()) {
//     console.log(i)
// }

// 

// let go = fn2()

// console.log(go.next())
// console.log(go.next())
// console.log(go.next())
// console.log(go.next())
// console.log(go.next())
// console.log(go.next())


// function* fn() {
//     try {
//         yield 'hello'
//         yield 'world'
//     } catch(e) {
//         console.log(e)
//     }
// }

// let go = fn()

// console.log(go.next())

// go.throw('出错了!')

// console.log(go.next())
// console.log(123)

// let a = 1
// let b = 2

// function* foo() {
//     a++
//     yield a;
//     b = b * a
//     a = (yield b) + 3
// }

// // let go = foo()
// // console.log(go.next())


// function step(gen) {
//     let it = gen()
//     let last

//     return function() {
//         last = it.next(last).value
//     }
// }

// let s = step(foo)
// s()
// s()
// s()

// console.log(a, b)

function* main() {
    let x = yield 'hello'
    console.log(x)

}
let it = main()
it.next()
// 跑出错误 立即被后面的catch捕获
try {
    console.log(123)
    it.throw('error')
}catch(err) {
    console.log(1)
    console.log(err)
}