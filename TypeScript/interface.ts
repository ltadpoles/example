// 类型断言：简单来说就是 我知道这是一个什么类型

// let someValue: any = 'this is a string';

// // 表示方式有两种：尖括号语法
// let strLength: number = (<string>someValue).length;
// // as 语法
// let strl: number = (someValue as string).length;

// function keepWholeObject(wholeObject: { a: string, b: number }) {
//     let { a, b = 1001 } = wholeObject;
//     console.log(a)
//     console.log(b)
// }

// 接口

// interface Person {
//     name: string;
//     age: number;
//     sex?: string; // 这个 ？就表示可选属性 如果没有传递的话就是undefined
//     hobby: string[];
// }

// function getPerosn(person: Person) {
//     this.name = person.name;
//     this.age = person.age;
//     this.sex = person.sex;
//     this.hobby = person.hobby;
// }

// let ming = { name: 'Ming', age: 18, sex: 'male', hobby: ['game'] };
// let hong = { name: 'Hong', age: 16, hobby: ['play', 'car'] };

// let a = new getPerosn(hong);
// console.log(a);

// interface SquareConfig {
//     color?: string;
//     width?: number;
// }

// function createSquare(config: SquareConfig): { color: string; area: number } {
//     let newSquare = { color: 'white', area: 100 };
//     if (config.color) {
//         newSquare.color = config.color;
//     }
//     if (config.width) {
//         newSquare.area = config.width * config.width;
//     }
//     return newSquare;
// }

// let mySquare = createSquare({ color: 'black' });

// console.log(mySquare);

// 只读属性 readonly

// interface Person {
//     readonly name: string; // 名称就是在第一次设置之后成为只读属性
// }
// let arr1: number[] = [1, 2, 3];
// let arr: ReadonlyArray<number> = arr1;

// // arr[1] = 8 // 编译会报错 因为这是只读的

// let a = arr; // 这里是可以正常运行的
// console.log(a);

// 函数类型接口

interface getFun {
    // 限制的就是参数的类型和返回值的类型
    (source: string, subString: string): boolean;
}

let myFun: getFun;

myFun = function (source: string, subString: string) {
    let result = source + subString;
    console.log(result);
    return 2 > 1;
};
