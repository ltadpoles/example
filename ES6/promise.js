// let promise = new Promise((resolve, reject) => {
//     resolve(1)
// })

// promise.then(res => {
//     console.log(res)
// })

// function timeout(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, ms, 'done')
//     })
// }

// timeout(100).then(value => {
//     console.log(value)
// })

// const p1 = new Promise(function(resolve, reject) {
//     setTimeout(() => reject(new Error('fail')), 3000)
// })

// const p2 = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve(p1), 1000)
// })

// p2.then(result => console.log(result)).catch(error => console.log(error))

// const promise = new Promise(function(resolve, reject) {
//     reject(new Error('test'))
// })
// promise.catch(function(error) {
//     console.log(error)
// })

// const promise = new Promise(function(resolve, reject) {
//     resolve('ok')
//     setTimeout(function() {
//         throw new Error('test')
//     }, 0)
// })
// promise.then(function(value) {
//     console.log(value)
// })

// const someAsyncThing = function() {
//     return new Promise(function(resolve, reject) {
//         // 下面一行会报错，因为x没有声明
//         resolve(x + 2)
//     })
// }

// someAsyncThing().then(function() {
//     console.log('everything is great')
// })

// setTimeout(() => {
//     console.log(123)
// }, 2000)

// const someAsyncThing = function() {
//     return new Promise(function(resolve, reject) {
//         // 下面一行会报错，因为x没有声明
//         resolve(x + 2)
//     })
// }

// someAsyncThing()
//     .then(function() {
//         return someOtherAsyncThing()
//     })
//     .catch(function(error) {
//         console.log('oh no', error)
//         // 下面一行会报错，因为 y 没有声明
//         y + 2
//     })
//     .then(function() {
//         console.log('carry on')
//     })

// let promise = Promise.resolve(2).then(
//     (res) => {console.log(res)},
//     () => {}
// )   

// console.log(promise)

// let promise = new Promise((resolve, reject) => {
//     console.log(1)
//     setTimeout(() => {
//         resolve(2)
//         console.log(3)
//     }, 2000);
//     reject('error')
// })

// promise.then(res => {
//     console.log(5)
// }).catch(err => {
//     console.log(err)
// })

const p1 = new Promise(function (resolve, reject) {
    setTimeout(reject, 3000, new Error('fail'))
  })
  
  const p2 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 1000, p1)
  })
  
  p2
    .then(result => console.log(result))
    .catch(error => console.log(error))