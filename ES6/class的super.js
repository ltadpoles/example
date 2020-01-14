class Person {
    constructor() {
        this.name = '游荡de蝌蚪'
    }
}
class Tadpole extends Person {
    constructor(){
        // super()
        console.log(super())
    }
}

class Tadpole223 extends Tadpole {
    constructor() {
        // super 实际返回的是当前类。添加了 this
        console.log(super())
    }
}


let t = new Tadpole223()

console.log(t.name)