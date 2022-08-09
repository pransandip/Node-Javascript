const person = { name: "Sandip", age: 28 }
// console.log(person) // { name: 'Sandip', age: 28 }

const key = 'email'
const employee = {
    name: "Sandip Roy",
    age: 28,
    hobbies: ['computer lab', 'big House', 'traveling'],
    'Home address': 'kalchini, 735217, Alipurduar, WB',
}
console.log(employee)

// ?-- In javascript object keys are in string by default --? //
console.log(employee['hobbies']) // [ 'computer lab', 'big House', 'traveling' ] 

// how to add key value pair to objects
// dot notation
employee.gender = 'Male';
console.log(employee) // gender: 'Male' Added to employee object

//bracket notation
employee['active'] = true
console.log(employee) //  active: true added

// for spaces used bracket notation
console.log(employee['Home address']) // kalchini, 735217, Alipurduar, WB

employee[key] = 'pransandip@gmail.com'
console.log(employee)

// ?--- How to iterate object ---? //
const details = {
    name: 'Sandip Roy',
    age: 28,
    hobbies: ['computer lab', 'big House', 'traveling'],
    address: 'kalchini, 735217, Alipurduar,WB',
    gender: 'Male',
    active: true,
    email: 'pransandip@gmail.com'
}

for (let key in details) {
    console.log(key) // name age.. etc
}

console.log("=============================================================================")

for (let key in details) {
    console.log(details[key]) // sandip Roy.. etc
}
console.log("=============================================================================")

for (let keys in details) {
    console.log(`${keys} : ${details[keys]}`) // name : Sandip Roy..
}

// ?-- Object.keys give us an array --? //
console.log(Object.keys(details)) // ['name', 'age', 'hobbies', 'address', 'gender',  'active', 'email']

console.log(typeof Object.keys(details)) // object

console.log("=============================================================================")

let val = Array.isArray(Object.keys(details))
console.log(val) // true

console.log("=============================================================================")

for (let key of Object.keys(details)) {
    if (details[key] === 'Sandip Roy') {
        details.name = 'Sandy Roy'
    }

}

console.log("Details->", details) // name: 'Sandy Roy',...

console.log("=============================================================================")

// ? -- Computed properties -- ? //

const key1 = 'item1'
const key2 = 'item2'

const value1 = 'CD Player'
const value2 = 'DVD Player'

let obj = {
    key1 : value1,
    key2 : value2,
}
console.log('obj ->', obj) // obj -> { key1: 'CD Player', key2: 'DVD Player' } here key remaining same


let obj2 = {
    [key1] : value1,
    [key2] : value2,
}
console.log('obj2 ->', obj2)  // obj2 -> { item1: 'CD Player', item2: 'DVD Player' }


let obj3 = {}
obj3[key1] = value1
obj3[key2] = value2
console.log('obj3->', obj3)  // obj3-> { item1: 'CD Player', item2: 'DVD Player' }

