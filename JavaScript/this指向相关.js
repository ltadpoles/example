/**
 * 手动模拟 call 改变 this 指向
 *  1. 使用eval函数
 */
Function.prototype.myCall = function (context) {
    // 界定传进来的参数是不是 null 或者 undefined
    context = context || window
    // 将这个函数设为对象的属性
    context.fn = this
    // 涉及到传参的情况
    var args = []
    // 注意：这里的 i 是从 1 开始的，第一个参数是需要改变this指向的参数
    for (var i = 1; i < arguments.length; i++) {
        args.push('arguments[' + i + ']')
    }
    // 执行eval函数
    var result = eval('context.fn(' + args + ')')
    // 删除添加的这个属性
    delete context.fn
    return result
}


// let person = {
//     name: 'tadpole'
// }

// function fn(a, b, c) {
//     console.log(a + b + c + this.name)
// }

// fn('我的', '名字', '是')
// fn.myCall(person, '我的', '名字', '是')

/**
 * 2. 使用拓展操作符
 */
Function.prototype.myCall = function (context, ...args) {
    context = context || window
    context.fn = this
    let result = context.fn(...args)
    delete context.fn
    return result
}

/**
 * 手动模拟 apply 改变 this 指向
 */
Function.prototype.myApply = function (context, arr) {
    context = Object(context) || window
    context.fn = this
    var result
    if (!arr) {
        context.fn()
    } else {
        var args = []
        // 这里要从 0 开始，因为 arr 本身就是一个数组
        for (var i = 0; i < arr.length; i++) {
            args.push('arr[' + i + ']')
        }
        console.log(args)
        result = eval('context.fn(' + args + ')')
    }
    delete context.fn
    return result
}

Function.prototype.myApply = function(context, arr) {
    context = Object(context) || window
    context.fn = this
    context.fn(...arr)
    delete context.fn
    return result
}