"use strict";
exports.__esModule = true;
exports.foo2 = exports.foo1 = void 0;
// 全局作用域是比较危险的 
var foo = 'tadpole';
// 我们可以将其创建为一个本地作用域
// export 关键字会影响整个文件的作用域
exports.foo1 = 'tadpole';
exports.foo2 = 'ltadpole';
