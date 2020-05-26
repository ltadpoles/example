function Person() {}
// 添加几个方法
Person.prototype = {
    setName: function(name) {
        this.name = name
    },
    setAge: function(age) {
        this.age = age
    },
    setSex: function(sex) {
        this.sex = sex
    }
}
// 别忘了重新指定一下构造函数
Person.constructor = Person
let person = new Person()
person.setName('游荡de蝌蚪')
person.setAge(18)
person.setSex('male')
console.log(person)