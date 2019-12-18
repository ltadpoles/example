function* helloWorldGenerator() {
    yield 'hello'
    yield 'world'
    return 'ending'
}

var hw = helloWorldGenerator()

hw.next() // { value: 'hello', done: false }
hw.next() // { value: 'world', done: false }
hw.next() // { value: 'ending', done: true }

// 惰性求值
function* gen() {
    yield 123 + 456
}

let n = gen()

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


function* fn() {
    try {
        yield 'hello'
        yield 'world'
    } catch(e) {
        console.log(e)
    }
}

let go = fn()

console.log(go.next())

go.throw('出错了!')

console.log(go.next())
console.log(123)