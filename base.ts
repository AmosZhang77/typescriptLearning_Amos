let o = {
  a: "foo",
  b: 12,
  c: "bar"
};
// let { a: newA, b: newB } = o; // 这里就是：结构，不是ts类型。要写类型需要按下面写法
let {a:newA, b:newB}: {a: string, b: number} = o; // 结构顺便新命名 a属性 命名成an变量，这个a:an 的冒号不是ts的类型表示，是js的结构语法。
console.log(newA,newB)
