import { Person } from './test'

let Hello: Person = function (name: string, age: number): void {
    console.log('Hello, My name is ' + name + ", I'm " + age + ' years old')
}
Hello('tadpole', 18)
