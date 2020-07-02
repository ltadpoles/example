// 慎用 bind 这会是你丢失类型检查

function getName(name: string): string {
    return name
}
// 这样是会报错的
// let currentTt = getName(123)

let currentName = getName.bind('tadpole')
// 下面这种方式就不会报错了
let currentTa = getName.bind(123)