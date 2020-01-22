// 特点：apply
// 1. 改变 this 指向
// 2. 接收字符串格式的参数
// 3. 执行函数

Function.prototype.myApply = function(context, argsArr) {
    if (typeof this !== 'function') {
        throw new Error('error')
    }
    if (context === void 0 || context === null) {
        context = this
    }
    if (argsArr === void 0 || argsArr === null) {
        argsArr = []
    }
    if (argsArr !== new Object(argsArr)) {
        throw new Error('err')
    }

    context = new Object(context) // 这一步可以处理包装类型

    const _fn = '_fn'

    context[_fn] = this

    const result = eval('context[_fn](' + argsArr + ')')

    delete context[_fn]

    return result
}


// 测试

let foo = {
    a: 1
}

function Fn(a, b) {
    console.log(this.a)
    console.log(b)
}

Fn.myApply(foo)
Fn.apply(foo, [2, 3])