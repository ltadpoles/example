// // public 默认类中的属性和方法都是公有的

// class Person {
//     name: string;
//     constructor(rename: string) {
//         this.name = rename;
//     }
//     move(meters: number) {
//         console.log(meters);
//     }
// }

// // 默认状态是下面这样的

// class Person {
//     public name: string;
//     public constructor(rename: string) {
//         this.name = rename;
//     }
//     public move(meters: number) {
//         console.log(meters);
//     }
// }

// ---------------------------------------------------------------------------------------
// 私有 private：如果标识了私有 那么外界是访问不到的

// class Animal {
//     private name: string
//     constructor(rename: string) {
//         this.name = rename
//     }
// }

// new Animal('Cat').name // 提示私有属性，只能在 类 的内部访问

// --------------------------------------------------------------------------------------------
// protected: 与private 不同的就是 在派生类中是可以使用 protected 指定的属性和方法的

// class Person {
//     protected name: string;
//     constructor(rename: string) {
//         this.name = rename;
//     }
// }

// class person extends Person {
//     getName() {
//         console.log(this.name);
//     }
// }

// let x = new Person('X');

// --------------------------------------------------------------------------------------------
// // readonly 只读属性，只能在构造函数和声明时被初始化

// class Person {
//     readonly name: string
//     constructor(rename: string) {
//         this.name = rename
//     }
// }

// let person = new Person('tadpole')

// person.name = 'ltadpole'  // 只读的 所以编译会报错

// --------------------------------------------------------------------------------------
// 存取器 get set
// 只带有 get不带有 set的存取器自动被推断为 readonly

// class Person {
//     constructor(private name: string) {}
//     get reName(): string {
//         return this.name
//     }
//     set reName(newName: string) {
//         // do sth
//         this.name = newName
//     }
// }

// ------------------------------------------------------------------------------------------------------
// // 静态属性 static
// class Person {
//     static age: number = 18;
// }
// let person = new Person()

// -----------------------------------------------------------------------------------------------------------
// // 抽象类 关键字：abstract
// // 1. 抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化
// // 2. 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
// // 3. 抽象方法必须包含 abstract关键字并且可以包含访问修饰符
// abstract class Animal {
//     constructor(public name: string) {}
//     call(): void {
//         console.log('My name is tadpole');
//     }
//     abstract move(): void;
// }

// class Cat extends Animal {
//     constructor() {
//         super('tadpole');
//     }
//     move(): void {
//         console.log('I can run');
//     }
//     getAge() {
//         console.log("I'm 2 years old");
//     }
// }

// // let Cat = new Animal('Cat') // 这是错误的，不能实例化
// let Cat1: Animal; // 可以创建一个对抽象类的引用
// // let Cat1 = new Cat(); // 可以对一下抽象子类进行实例化

// Cat1.call();
// Cat1.move();
// // Cat1.getAge(); // 使用引用的时候是不能调用子类上面的方法的
