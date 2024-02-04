import React from 'react';

const App = () => {
  // 多态
  // 定义一个动物类
  class Animal {
    name?: string;
    constructor(name?: string) {
      this.name = name;
    }

    // 定义一个通用的声音方法
    makeSound() {
      console.log('Animal makes sound');
    }
  }

  // 定义一个狗类，继承自动物类
  class Dog extends Animal {
    // 重写父类的声音方法
    makeSound() {
      console.log('Dog barks');
    }
  }

  // 定义一个猫类，继承自动物类
  class Cat extends Animal {
    // 重写父类的声音方法
    makeSound() {
      console.log('Cat meows');
    }
  }

  // 创建不同的动物对象
  let animal = new Animal('Animal');
  let dog = new Dog('Dog');
  let cat = new Cat('Cat');

  // 调用声音方法，实现多态
  animal.makeSound(); // 输出："Animal makes sound"
  dog.makeSound(); // 输出："Dog barks"
  cat.makeSound(); // 输出："Cat meows"

  // ------
  // 父类
  function Parent(name) {
    this.name = name;
  }

  Parent.prototype.sayHello = function () {
    console.log('Hello, ' + this.name);
  };

  // 子类，通过原型链继承父类
  function Child(name, age) {
    // TODO-n 构造函数
    Parent.call(this, name);
    this.age = age;
  }
  // TODO-n 原型链
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;

  let parent = {
    name: 'Parent',
    sayHello: function () {
      console.log('Hello, ' + this.name);
    },
  };

  // TODO-n 原型式继承
  let child = Object.create(parent);

  // TODO-n 寄生式继承

  return <div>app</div>;
};

export default App;
