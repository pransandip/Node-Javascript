// new keyword to create and use it as a object
// 'create_user' is a constuctor function :- its constructing object for us
// there is convention for constuctor function to use with a 'new' kwyword
// First letter of this function should be in Caps:- so that we can know that we have to use new keyword

function Create_user(Obj) {
    this.firstName = Obj?.firstName;
    this.lastName = Obj?.lastName;
    this.age = Obj?.age;
    this.email = Obj?.email;
    this.address = Obj?.address;
}

Create_user.prototype.about = function () { return `name is ${this.firstName} ${this.lastName} : age is ${this.age}` }
Create_user.prototype.is18 = function () { return this.age >= 18; }

const user = new Create_user({
    firstName: 'Sandy', lastName: 'Roy',
    age: 28, email: 'pransandip@gmail.com', address: 'A/21, Golf green, Tollygunge, kolkata 700040',
})
const user2 = new Create_user({
    firstName: 'Sandip', lastName: 'Roy',
    age: 28, email: 'pransandip.jobs@gmail.com', address: 'A/21, Golf green, Tollygunge, kolkata 700040',
})

console.log(user.__proto__)   // {about: ƒ, is18: ƒ, constructor: ƒ}
console.log(user.is18())     // true
console.log(user2.email)    // pransandip.jobs@gmail.com
console.log(user2.about()) // name is Sandip Roy : age is 28

console.log('-----------------------------------------')
for(let key in user){
    if(user.hasOwnProperty(key)) // otherwise it will fetch key from prototype
    console.log(`${key} : ${user[key]}`)
}


