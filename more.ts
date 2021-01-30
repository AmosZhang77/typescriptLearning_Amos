// type aliases
type PlusType = (x: number, y: number) => number
function sum(x: number, y: number): number {
  return x + y
}
const sum2: PlusType  = sum // 不用像sum一样写这么多函数的类型，用了别名

type NameResolver = () => string
type NameOrResolver = string | NameResolver // 联合类型，表示这两种都可以string | NameResolver，联合类型只能访问共同属性
function getName(n: NameOrResolver): string {
  if (typeof n === 'string') {
    return n
  } else {
    return n()
  }
}

// type assertion

function getLength(input: string | number) : number {
  // const str = input as String // 用as关键词告诉ts我更清楚它的类型，你别报错了，类型断言。
  // 注意，断言需要和联合类型一起使用，断言的结果之只能是联合类型的一种。const str = input as Boolean是错误的
  // if (str.length) {
  //   return str.length // 这里联合类型只能访问共同属性，无法访问num没有的length，所以会报错，需要上面对于input的断言
  // } else {
  //   const number = input as Number
  //   return number.toString().length
  // }
  if((<string>input).length) { // (<string>input) 这样也是类型断言写法。（快捷写法）
    return (<string>input).length
    // 注意，断言需要和联合类型一起使用，断言的结果之只能是联合类型的一种。(<boolean>input) 是错误的

  } else {
    return input.toString().length
  }
}

jQuery('')

