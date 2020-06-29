// 如果是全局作用域，这里是不提示的。改为本地作用域之后会报错
// console.log(foo)

import * as foo from './foo'
import * as foo1 from 'foo'

// interface Crazy {
//     new (): {
//         hello: string
//     }
// }

// class CrazyClass implements Crazy {
//     // constructor() {
//     //     return { hello: 'hello' }
//     // }
//     hello: string = 'hello'
// }

// let crazy = new CrazyClass()
