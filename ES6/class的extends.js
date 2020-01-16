class Person {
    constructor() {
        this.name = 'tadpole'
    }
    say() {
        console.log('My name is tadpole')
    }
}

function Hello() {
    return class {
        constructor() {
            this.name = 'tadpole'
        }
        say() {
            console.log(2)
        }
    }
}

function Fn() {
    this.name = 'tadpole3'
}
Fn.prototype = {
    say() {
        console.log(3)
    }
}

// class Tadpole extends Person {}
// class Tadpole extends Hello() {}
// class Tadpole extends Fn {}
// class Tadpole extends null {
//     constructor() {}
// }

// console.log(Tadpole)

let t = new Tadpole()
console.log(t)
// t.say()