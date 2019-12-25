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
//             }, 1000);
//         }, 2000);
//     }, 3000);
// }

// loop()

function fn(timer, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            callback()
            resolve()
        }, timer);
    })
}

let promise = new Promise((resolve, reject) => { resolve() })

function loop() {
    promise.then(res => {
        fn(3000, red)
    }).then(res => {
        fn(2000, green)
    }).then(res => {
        fn(1000, yellow)
    }).then(res => {
        loop()
    })
}

loop()