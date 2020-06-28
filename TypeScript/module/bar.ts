// 如果是全局作用域，这里是不提示的。改为本地作用域之后会报错
// console.log(foo)

import * as foo from './foo'
import foo1 from 'foo'

console.log(foo.foo1)

console.log(foo1)