function echo<T>(arg: T): T { //  泛型，正常定义类型前面多加<T>
  return arg // 这个函数输入和输出的类型随意，单输入和输出一定是一种类型的。
}

const result = echo(true)

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}
const result2 = swap(['string', 123])

function echoWithArr1<T>(arg: T): T {
  console.log(arg.length) // 报错，arg不一定有length
  return arg
}
function echoWithArr<T>(arg: T[]): T[] {
  console.log(arg.length) // arg不一定有length，要数组泛型,但是字符串虽然有length这个方案还是不行的，会报错。
  return arg
}
const arrs = echoWithArr([1, 2, 3])
const arrs1 = echoWithArr(['aa', 2, 3])

interface IWithLength { // 定义一个有length的接口来进行实现
  length: number
}

function echoWithLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length)
  return arg
}

const str = echoWithLength('str') // 这里字符串也可以了，只要有length属性都可以
const obj = echoWithLength({ length: 10, width: 10})
const arr2 = echoWithLength([1, 2, 3])

class Queue<T> { // 函数使用泛型
  private data = [];
  push(item: T) {
    return this.data.push(item)
  }
  pop(): T {
    return this.data.shift()
  }
}

const queue = new Queue<number>()
queue.push(1)
console.log(queue.pop().toFixed())

const queue2 = new Queue<string>()
queue2.push('str')
console.log(queue2.pop().length)

interface KeyPair<T, U> { // 接口使用泛型
  key: T;
  value: U;
}
let kp1: KeyPair<number, string> = { key: 123, value: "str" }
let kp2: KeyPair<string, number> = { key: 'test', value: 123 }

let arr: number[] = [1, 2, 3]
let arrTwo: Array<number> = [1, 2, 3] // 这个和上面一句效果一样，但是是用了泛型

interface IPlus<T> {
  (a: T, b: T) : T
}
function plus(a: number, b: number): number {
  return a + b;
}
function connect(a: string, b: string): string {
  return a + b
}
const a: IPlus<number> = plus
const b: IPlus<string> = connect
