// static methods and properties

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    static desc = 'this is person class'

    static info(){
        return `this is a static method`
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    set fullName(fullName) {
        const [firstName, lastName] = fullName.split(' '); //:- it will give an array
        this.firstName = firstName;
        this.lastName = lastName;
    }

    eat() {
        return `${this.name} ${this.lastName} is eating..`;
    }

    isSuperCute() {
        return this.age <= 7;

    }

    isCute() {
        return true;
    }
}

const user1 = new Person('Sandip', 'Roy', 28)
console.log(user1.isSuperCute()) // false

console.log(Person.info()) //this is a static method :- for static method we call it with class name
console.log(Person.desc) // this is person class    