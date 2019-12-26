// 红灯三秒亮一次，绿灯两秒亮一次，黄灯一秒亮一次；如何让三个灯不断交替重复亮灯

function red() {
    console.log('red')
}

function green() {
    console.log('green')
}

function yellow() {
    console.log('yellow')
}

// function loop() {
//     setTimeout(() => {
//         red()
//         setTimeout(() => {
//             green()
//             setTimeout(() => {
//                 yellow()
//                 loop()
//             }, 1000)
//         }, 2000)
//     }, 3000)
// }

// loop()
// ---------------------------------------------------------------------------
// function fn(timer, cb) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             cb()
//             resolve()
//         }, timer);
//     })
// }

// let promise = Promise.resolve()

// function loop() {
//     promise.then(res => {
//         return fn(3000, red)
//     }).then(res => {
//         return fn(2000, green)
//     }).then(res => {
//         return fn(1000, yellow)
//     }).then(res => {
//         loop()
//     })
// }

// loop()
// -------------------------------------------------------------------------------------
function fn(timer, cb) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            cb()
            resolve()
        }, timer)
    })
}

function* gen() {
    yield fn(3000, red)
    yield fn(2000, green)
    yield fn(1000, yellow)
}

function loop(iterator, gen) {
    // 执行 Generator 函数
    let result = iterator.next()

    if (result.done) {
        // 这里需要重新开始执行
        loop(gen(), gen)
    } else {
        result.value.then(res => {
            loop(iterator, gen)
        })
    }
}

loop(gen(), gen)

// function fn(timer, cb) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             cb()
//             resolve()
//         }, timer)
//     })
// }

// async function loop() {
//     while (true) {
//         await fn(3000, red)
//         await fn(2000, green)
//         await fn(1000, yellow)
//     }
// }

// loop()
