/**
 * 节流：指定时间间隔内只会执行一次任务
 * 
 * @param {Function} 需要节流的函数
 * @param {Number} 时间 
 */
function throttle(fn, interval) {
    let timer,
        firstTime = true // 是否是第一次执行
    return function () {
        let _this = this
        if (firstTime) {
            fn.apply(_this, arguments) // 第一次不需要延迟执行
            return firstTime = false
        }
        if (timer) { // 如果定时器还在 说明前一次还没有执行完
            return false
        }
        timer = setTimeout(() => {
            clearTimeout(timer)
            timer = null
            fn.apply(_this, arguments)
        }, interval || 500);
    }
}

// 也可以使用下面这种方式

function throttle(fn, interval) {
    let canRun = true //节流阀
    return function() {
        if(!canRun) {
            return
        }
        canRun = false
        setTimeout(() => {
            fn.apply(this, arguments)
            canRun = true
        }, interval);
    }
}

// 测试一下 
window.onresize = throttle(function () {
    console.log(1)
}, 1000)