// 定义：定义一系列的算法，把他们一个个封装起来，并且可以使他们相互替换（函数参数）
// 目的：将算法的使用与算法的实现分离开来
// 一般分为两个部分：策略类 ==> 封装具体的算法  环境类 ==> 接受用户的请求，将请求委托给某一个策略类（）

// 绩效计算工资 S A B C

// /**
//  * 绩效计算初始版
//  *
//  * @param {String} level 绩效等级
//  * @param {Number} salary 工资基数
//  */
// var calculateBonus = function (level, salary) {
//     if (level === 'S') {
//         return salary * 4
//     }
//     if (level === 'A') {
//         return salary * 3
//     }
//     if (level === 'B') {
//         return salary * 2
//     }
// }

// var tadpole = calculateBonus('A', 10000) // 30000
// var ltadpole = calculateBonus('B', 14000) // 28000

// 缺点：
// 1. 函数 calculateBonus 比较庞大，包含了很多 if-else 判断
// 2. 缺乏弹性，不利于增加修改逻辑 违反开放-封闭原则
// 3. 复用性差

// 使用策略模式分离逻辑

// 各种算法
// var strategies = {
//     'S': function (salary) {
//         return salary * 4
//     },
//     'A': function (salary) {
//         return salary * 3
//     },
//     'B': function (salary) {
//         return salary * 2
//     }
// }
// // 策略类
// var calculateBonus = function (level, salary) {
//     return strategies[level](salary)
// }

// var tadpole = calculateBonus('A', 10000) // 30000
// var ltadpole = calculateBonus('B', 14000) // 28000
// console.log(ltadpole)

// 优点：
// 1. 消除了原条件中大片的条件分支语句
// 2. 提供了开放-封闭原则的完美支持
// 3. 提高复用性

// 表单校验
// 策略类
var strategies = {
    isEmpty: function (value, errMsg) {
        if (value == '') {
            return errMsg
        }
    },
    isMobile: function (value, errMsg) {
        if (!/(^1[3|4|5|7|8][0-9]{9}$)/.test(value)) {
            return errMsg
        }
    },
    maxLength: function (value, length, errMsg) {
        if (value.length > length) {
            return errMsg
        }
    }
}
// 校验类
var Validator = function () {
    this.cache = []
}
// // 校验规则
// Validator.prototype.add = function (value, rule, errorMsg) {
//     var ary = rule.split(':')
//     this.cache.push(function () {
//         var strategy = ary.shift()
//         ary.unshift(value)
//         ary.push(errorMsg)
//         console.log(ary)
//         return strategies[strategy].apply(null, ary)
//     })
// }

// 如果有多个校验规则
Validator.prototype.add = function (value, rules) {
    var self = this
    for (var i = 0, rule; (rule = rules[i++]); ) {
        ;(function (rule) {
            var strategyArr = rule.strategy.split(':')
            var errMsg = rule.errMsg
            self.cache.push(function () {
                var strategy = strategyArr.shift()
                strategyArr.unshift(value)
                strategyArr.push(errMsg)
                return strategies[strategy].apply(null, strategyArr)
            })
        })(rule)
    }
}

// 开始校验
Validator.prototype.start = function () {
    for (var i = 0, valFun; (valFun = this.cache[i++]); ) {
        var msg = valFun()
        if (msg) {
            return msg
        }
    }
}

var validator = new Validator()

// validator.add('游荡de蝌蚪', 'maxLength:8', '最多输入八个字')
// validator.add('1552637487', 'isMobile', '请输入正确的手机号')

validator.add('游荡de蝌蚪', [
    {
        strategy: 'isEmpty',
        errMsg: '请输入用户名'
    },
    {
        strategy: 'maxLength: 5',
        errMsg: '最多输入5个字'
    }
])

console.log(validator.start())
