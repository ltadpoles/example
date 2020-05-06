let book = { name: 'ES6基础', price: 56 }

let proxy = new Proxy(book, {
    get: function(target, prop) {
        if (prop === 'name') {
            return 'ES6从入门到放弃'
        } else {
            return target[prop]
        }
    },
    set: function(target, prop, val) {
        if (prop === 'price') {
            target[prop] = 56
        }
    }
})

// console.log(proxy.name)
proxy.price = 60
console.log(proxy.price)
