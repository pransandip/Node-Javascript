// super means parent class

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        return `${this.name} is eating (super class)`;
    }

    isSuperCute() {
        return this.age <= 1;

    }

    isCute() {
        return true;
    }

}

class Cat extends Animal{
    constructor(name, age, speed){
        super(name, age)
        this.speed = speed;
    }

    eat() {
        return `${this.name} is eating (Base class)`;
    }

    run(){
        return `${this.name} is running ${this.speed} kmph`
    }
}

const tom = new Cat('Tom', 2, 45) 
console.log(tom) // Cat { name: 'Tom', age: 2, speed: 45 }
console.log(Object.getPrototypeOf(tom)) // Animal {constructor: ƒ}
console.log(tom.isCute()) // true
console.log(tom.isSuperCute()) // false
console.log(tom.eat()) // Tom is eating (Base class) :- first it will look base class if preset will print, otherwise it will go to super class
console.log(tom.run()) // Tom is running 45 kmph
console.log(tom.eat()) // Tom is eating (Base class)


const jerry = new Animal('Jerry', 0.6, 50)
console.log(jerry.eat()) // Jerry is eating (super class)