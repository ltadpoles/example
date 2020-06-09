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
var strategies = {
    'S': function (salary) {
        return salary * 4
    },
    'A': function (salary) {
        return salary * 3
    },
    'B': function (salary) {
        return salary * 2
    }
}
// 策略类
var calculateBonus = function (level, salary) {
    return strategies[level](salary)
}

var tadpole = calculateBonus('A', 10000) // 30000
var ltadpole = calculateBonus('B', 14000) // 28000
console.log(ltadpole)