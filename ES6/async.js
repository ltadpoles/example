// function getName() {
//     return '游荡de蝌蚪'
// }

// function getAge() {
//     return 18
// }

// async function getInfo() {
//     // let name = await getName()
//     // let age = await getAge()

//     let [name, age] = await Promise.all([getName(), getAge()])
    
//     return {
//         name,
//         age
//     }
// }

// getInfo().then(res => {
//     console.log(res)
// })

// async function getName() {
//     return Promise.resolve(2)
// }

// async function say() {
//     let name = await getName()
//     console.log(name)
// }

// say()

async function async1() {
    console.log("async1 start");
    await async2();
    console.log("async1 end");
    return 'async return';
}

async function async2() {
    console.log("async2");
}

console.log("script start");

setTimeout(function() {
    console.log("setTimeout");
}, 0);

async1().then(function (message) { console.log(message) });

new Promise(function(resolve) {
    console.log("promise1");
    resolve();
}).then(function() {
    console.log("promise2");
});

console.log("script end")