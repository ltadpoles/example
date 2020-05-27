// 任务频繁触发的情况下，只有任务触发的间隔超过指定间隔的时候，任务才会执行
// 实际上就是任务触发的频率如果比我们设定的时间要小，那么在这个时间段里面就只执行一次
function debounce(fn, interval) {
    let timer = null
    return function() {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, arguments)
        }, interval);
    }
}

// 测试一下

window.onresize = debounce(function() {
    console.log('防抖')
}, 1000)