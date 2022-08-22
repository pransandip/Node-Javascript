// call apply bind

function myFunc() {
    // "use strict" // if we use strict mode :- console.log(this) will be undefined
    console.log(this) // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
    console.log('Sandy') // Sandy
}

// window.myFunc()  //:-Ok
// this.myFunc()   //:-Ok
myFunc()

console.log('-----------------------------------------')

function hello() {
    console.log('Hello world')
}

hello.call() // Hello world

console.log('-----------------------------------------')

const user = {
    name: 'Sandy roy',
    age: 28,
    about: function (hobby, food) {
        console.log(`${this.name} : ${this.age} : ${hobby} : ${food}`)
    }
}

const user2 = {
    name: 'Avi roy',
    age: 23,
}

user.about()               // Sandy roy : 28 : undefined : undefined
//user.about.call()       //  : undefined
user.about.call(user, 'coding', 'momos')    // Sandy roy : 28 : coding : momos
user.about.call(user2)  // Avi roy : 23  :- Here 'this' will be user2 object


console.log('-----------------------------------------')

// call 
function info(hobby, food) {
    console.log(`${this.name} : ${this.age} : ${hobby} : ${food}`)
}

const person = {
    name: 'Avi roy',
    age: 23,
}

info.call(person, 'Aquafish', 'momos') // Avi roy : 23 : fish : momos

// apply
info.apply(person, ['coocking', 'momos']) // Avi roy : 23 : coocking : momos

// bind
const func1 = info.bind(person, 'coding', 'mutton') // it's returns a function
func1() // Avi roy : 23 : coding : mutton

