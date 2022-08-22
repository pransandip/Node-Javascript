// __proto__ , [[Prototype]] is samething
// but 'prototype' is completely different

const Obj1 = {
    key1: 'value1',
    key2: 'value2'
}

const Obj2 = Object.create(Obj1) // create a empty object and made a reference to Obj1
console.log(Obj2) // {}

Obj2.key3 = 'value3';
console.log(Obj2) // { key3: 'value3' }
console.log(Obj2.key1) // value1 :-it's got a access to Obj1

console.log(Obj2.__proto__) // { key1: 'value1', key2: 'value2' }


const Obj3 = Object.create(Obj2)
console.log(Obj3.__proto__) // { key3: 'value3' }
console.log(Obj3.key2) //value2 :-it's got a access to Obj1


// javascript function ===> its not just a function, (function + object)
const test = function hello() {
    console.log('hello World')
}
console.log(test.name) // hello 

// you can add properties to this function like object
test.myProp = 'Sandip Roy'
console.log(test.myProp) // Sandip Roy

// Like 'name' function provides more usefull prototype
// function provides free space means obj {} and this object call prototype
// only function provides prototype property

console.log(test.prototype) // {} :- free space  to add key value pairs to function

if (test.prototype) {
    console.log('prototype is present') // prototype is present
} else {
    console.log('prototype is not present')
}

test.prototype.abc = 'abc';
test.prototype.xyz = 'xyz';
test.prototype.sing = function () { return 'lalala' };
console.log(test.prototype) // { abc: 'abc', xyz: 'xyz', sing: [Function (anonymous)] }
console.log(test.prototype.sing()) // lalala

console.log(test) // [Function: hello] { myProp: 'Sandip Roy' }
test() // hello World

console.log('-----------------------------------------------------')

function create_user(Obj) {
    const user =  Object.create(create_user.prototype) // {}
    user.firstName = Obj?.firstName;
    user.lastName = Obj?.lastName;
    user.age = Obj?.age;
    user.email = Obj?.email;
    user.address = Obj?.address;
    return user;
}

create_user.prototype.about = function () { return `name is ${this.firstName} ${this.lastName} : age is ${this.age}` }
create_user.prototype.is18 = function () { return this.age >= 18; }

const user = create_user({
    firstName: 'Sandy', lastName: 'Roy',
    age: 28, email: 'pransandip@gmail.com', address: 'A/21, Golf green, Tollygunge, kolkata 700040',
})

console.log(user.is18()) // true
    
