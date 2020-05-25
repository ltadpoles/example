/**
 * 浅拷贝：只拷贝一层
 *
 * @param {Object} 需要被拷贝的对象
 */
function shallowCopy(source) {
    // 首先判断传进来的值是不是一个对象
    if (source && typeof source !== 'object') {
        return new Error('error')
    }
    // 创建一个新的对象
    let targetSource = source.constructor === Array ? [] : {}
    for (let key in source) {
        // 判断对象的属性是否是从原型上面遍历到的
        if (source.hasOwnProperty(key)) {
            targetSource[key] = source[key]
        }
    }
    return targetSource
}

const person = {
    name: '游荡de蝌蚪',
    age: 19,
    hobby: ['game', 'dog']
}

const person1 = shallowCopy(person)
console.log(person1)

/**
 * 深拷贝：在浅拷贝的基础上遍历所有内部属性
 * 
 * @param {Object} 需要拷贝的对象 
 */
function deepCopy(source) {
    if (!source && typeof source !== 'object') {
        return new Error('error')
    }

    let targetSource = source.constructor === Array ? [] : {}
    for (let key in source) {
        if (source.hasOwnProperty(key)) {
            if (source[key] && typeof source[key] === 'object') {
                // 首先创建，然后递归赋值
                targetSource[key] = source[key].constructor === Array ? [] : {}
                targetSource[key] = deepCopy(source[key])
            } else {
                targetSource[key] = source[key]
            }
        }
    }
    return targetSource
}