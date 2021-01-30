// 枚举
enum Direction {
  Up, // 默认Up = 0开始，下面递增
  Down, // 默认Down = 1
  Left,
  Right,
}

console.log(Direction.Up) // 0
console.log(Direction[0]) // 'Up' 编译出来就是 双向赋值，（赋值语句返回的是等号右边的值,Direction['Up'] = 0 返回0）
/* (function (Direction){
  Direction[Direction['Up'] = 0] = 'Up'
}(Direction|| (Direction = {})) */


enum Direction2 {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}
const value = 'UP'
if(value === Direction2.Up){
  console.log('go up2!')
}

const enum Direction3 { // 用const定义常量枚举，提高性能。编译出来是已经查出来的值，而不是上面等于的逻辑
  Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT',
}
const value3 = 'UP'
if(value === Direction3.Up){
  console.log('go up3!')
}
/* 常量枚举编译出来，只有常量只能常量枚举，还有一种是计算值不是常量。
var value = 'UP'
if(value === 'UP'){
  console.log('go up3!')
}
*/

