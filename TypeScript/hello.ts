// // 最简单的方式
// function getHello(person) {
//     return "Hello " + person;
// }

// let user = "tadpole";

// console.log(getHello(user));

// -----------------------------------------------------------------------------
// // 指定参数的类型
// function getHello(person: string) {
//     return 'Hello ' + person
// }

// let user = 'tadpole'

// // 如果user不是string类型，那么在编译的时候就会报错 比如 let user = 1
// console.log(getHello(user))

// ----------------------------------------------------------------------------
// 明确地使用 implements语句

interface Person {
    firstName: string;
    lastName: string;
}

function getPerson(person: Person) {
    return "Hello " + person.firstName + " " + person.lastName;
}

let user = { firstName: "tadpole", lastName: "游荡de蝌蚪" };

console.log(getPerson(user));
