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

console.log(n.next())
console.log(n.next())

// 不能直接使用 gen().next()  这样一直是同一个结果`