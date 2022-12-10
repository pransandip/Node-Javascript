const person = {
    firstName: 'Sandy roy',
    age: 28,
    about: function () {
        console.log(`name is ${this.firstName} : age is ${this.age}`)
    }
}

// do not do this mistake

const myfunc = person.about; // its not binding, we are making reference to a variable
myfunc() // name is undefined : age is undefined


"what's happening in above example is"
// const myfunc = function () {
//     console.log(`name is ${this.firstName} : age is ${this.age}`) 
// }
// myfunc() :- name is undefined : age is undefined
"so its refering to window object so values are undefined"

// use bind
const myfunc2 = person.about.bind(person);
myfunc2() // name is Sandy roy : age is 28


// Arrow function :- not takes this keyword, it take 'this' from it's surround, means it;s 'this' is one level up 'window'
const person2 = {
    firstName: 'Sandy roy',
    age: 28,
    about: () => {
        console.log(this) // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
        console.log(`name is ${this.firstName} : age is ${this.age}`)
    }
}

person2.about()         // name is undefined : age is undefined
person2.about(person2) //  name is undefined : age is undefined





