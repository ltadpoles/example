// // 最简单的方式
// function getHello(person) {
//     return "Hello " + person;
// }
function getPerson(person) {
    return "Hello " + person.firstName + " " + person.lastName;
}
var user = { firstName: "tadpole", lastName: "游荡de蝌蚪" };
console.log(getPerson(user));
