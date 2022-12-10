class CreateUser {
    constructor(Obj) {
        console.log('constructor called')
        this.firstName = Obj?.firstName;
        this.lastName = Obj?.lastName;
        this.age = Obj?.age;
        this.email = Obj?.email;
        this.address = Obj?.address;
    }

    about() {
        return `name is ${this.firstName} ${this.lastName} : age is ${this.age}`
    }

    is18() {
        return this.age >= 18;
    }

    square(a) {
        return a * a;
    }
}

const user0 = new CreateUser({
    firstName: 'Sandy', lastName: 'Roy',
    age: 28, email: 'pransandip@gmail.com', address: 'A/21, Golf green, Tollygunge, kolkata 700040',
})

console.log(user0.is18()) //true
console.log(Object.getPrototypeOf(user0)) //{constructor: ƒ, about: ƒ, is18: ƒ} 
console.log(user0.square(2)) // 4