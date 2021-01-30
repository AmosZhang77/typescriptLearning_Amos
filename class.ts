class Animal {
  static categoies:string[] = ['mammal', 'bird'] // 类的静态属性，或者方法，不用实例化，直接类上取
 static isAnimal(a){
    return a instanceof Animal
 }


  // public name:string // 不写默认public 外面可以访问
  // protected name:string// 只有本类和子类能访问，外面不能访问
  // private name:string // 只有本类能访问，子类都不能访问，外面也不能用

  // readonly name: string 只读
  name: string

  constructor (name: string) {
    this.name = name
  }

  run () {
    return `${this.name} is running`
  }
}

const snake = new Animal('lily')
console.log(snake.run())

console.log(Animal.categoies) // 类的静态属性，不用实例化，直接类上取
console.log(Animal.isAnimal(snake)) // 类的静态方法，不用实例化，直接类上用

// 继承
class Dog extends Animal {
  bark () {
    return `${this.name} is barking`
  }
}

// 自动继承了构造函数
const xiaobao = new Dog('xiaobao')
console.log(xiaobao.name) // xiaobao 自动继承了构造函数
console.log(xiaobao.run()) // xiaobao is running 自动继承了方法
console.log(xiaobao.bark()) // xiaobao is barking

class Cat extends Animal {
  constructor (name) { // 子类如果有构造函数，必须写super()，需要继承的属性
    super(name) // 构造函数中super执行父类的构造函数
  }

  run () {
    return `Meow,${super.run()}` // 重写父类方法run，调用父类同名方法run用super.run
  }
}

const maomao = new Cat('maomao')
console.log(maomao.run()) // Meow,maomao is running


// 手机和汽车想不到合适的共同父类，不合适用继承。用interface提取公共逻辑，用implements继承接口。在继承不适用的时候增加灵活性。
interface Radio{
  switchRadio(triggerL:boolean):void // 表示这个接口需要switchRadio方法
}

interface Battery{
  checkBatteryStatus()
}

// 接口继承接口
interface RadioWithBattery extends Radio{
  checkBatteryStatus()
}

class Car implements Radio{
  switchRadio(){ // 这里不写方法会报错，因为implements规定了接口

  }
}

class Cellphone implements Radio,Battery { // 要用多个接口并联，加逗号
  switchRadio(){ // 这里不写方法会报错，因为implements规定了接口

  }
  checkBatteryStatus(){}
}

class Cellphone2 implements RadioWithBattery { // 使用继承于接口的接口，效果与上面两个接口相同
  switchRadio(){

  }
  checkBatteryStatus(){}
}
