"use strict";
// 如果是全局作用域，这里是不提示的。改为本地作用域之后会报错
// console.log(foo)
exports.__esModule = true;
var foo = require("./foo");
console.log(foo.foo1);
