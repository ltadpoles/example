// 保证一个类仅有一个实例，并提供一个访问它的全局访问点

// 标准的单例模式：用一个变量来标志当前是否已经为某个类创建过对象

// 单例模式的核心是 确保只有一个实例，并提供全局访问

// 1.标准的单例模式
var Singleton = function (name) {
    this.name = name
}

Singleton.instance = null

Singleton.prototype.getName = function () {
    alert(this.name)
}

Singleton.getInstance = function (name) {
    // 通过instance变量来创建一个实例
    if (!this.instance) {
        this.instance = new Singleton(name)
    }
    return this.instance
}

var a = Singleton.getInstance('tadpole')
var b = Singleton.getInstance('tadpole1')

a === b // true

//-----------------------------------------------------------------------------------------------------------------------
// 2.构造函数
function Singleton(name) {
    var instance
    // 判断实例如果存在 那么就直接返回
    if (typeof Singleton.instance === 'object') {
        return Singleton.instance
    }
    // 正常创建实例
    this.name = name
    return Singleton.instance = this
}

var a = new Singleton('tadpole')
var b = new Singleton('tadpole1')

a === b // true

// ----------------------------------------------------------------------------------------------------------------------------
// 通用惰性单例模式

var singleto = function (fn) {
    var result // 多次调用执行就将赋值给这个变量
    return function () {
        return result || (result = fn.apply(null, arguments))
    }
}