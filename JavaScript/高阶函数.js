// 简单来说 高阶函数就是 接受另一个函数为参数的 函数

// 最简单的模式
function add(fn) {
    return fn(2, 3)
}

function fn(a, b) {
    return a + b
}

add(fn)