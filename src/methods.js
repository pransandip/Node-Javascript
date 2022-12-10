// methods
//:- function inside object Ex-Class

const person = {
    name: 'Sandy roy',
    age: 28,
    description: function () {
        console.log(`perseon name is ${this.name} and age is ${this.age}`) //:- now over here this refer to person object
    }
}

console.log(person.description) // [Function: features] :-returing complete function
person.description() // perseon name is Sandy roy and age is 28


console.log('-----------------------------------------------------')


const person2 = {
    name: 'Sandy roy',
    age: 28,
    description: function () {
        console.log(this) // this refer to entire person object
    }
}

console.log(person2) // {name: 'Sandy roy', age: 28, description: ƒ}


console.log('-----------------------------------------------------')


function details() {
    console.log(`employe name is ${this.name} and age is ${this.age}`)
}

const employe1 = {
    name: 'Sandy roy',
    age: 28,
    about: details // we are not calling setting function
}
const employe2 = {
    name: 'Puja kaur',
    age: 28,
    about: details
}
const employe3 = {
    name: 'Rohit Bhagat',
    age: 48,
    about: details
}

employe1.about() // employe name is Sandy roy and age is 28
employe2.about() // employe name is Puja kaur and age is 28 
employe3.about() // employe name is Rohit Bhagat and age is 48 


// console.log(this) // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// console.log(window) // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// console.log(this === window) // true