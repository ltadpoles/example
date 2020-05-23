function foo() {
    return Promise.resolve(2)
}

function* main() {
    try {
        let text = yield foo()
        console.log(text)
    } catch(err) {
        console.log(err)
    }
}

let it = main()
let p = it.next().value

console.log(p)

p.then(res => {
    console.log(res)
    it.next(res)
}, err => {
    console.log(err)
})