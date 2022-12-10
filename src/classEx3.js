// getter and setters

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    set fullName(fullName) {
        const [firstName, lastName] = fullName.split(' '); //:- it will give an array
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person1 = new Person('sandy', 'roy', 28)
console.log(person1.fullName) // sandy roy :- now we can use it as property
person1.fullName = 'Sandip Roy'
console.log(person1) // Person { firstName: 'Sandip', lastName: 'Roy',  age: 28, }

