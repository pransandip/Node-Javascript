// Maps
// map is an iterable
// store data in ordered fashion
// store key value pair(like object)
// duplicate keys are not allowed like objects
// different between maps and objects
// objects can only have string or symbol
// as key
// in maps you can use anything as key
// like array,number,string

// object literals
// key -> string
// key -> symbol
const person = {
    name: 'Sandip Roy',
    age: 28,
    hobbies: ['computer lab', 'big House', 'traveling'],
    address: 'kalchini, 735217, Alipurduar,WB',
    gender: 'Male',
    active: true,
    email: 'pransandip@gmail.com',
    1: 'one' // key-> string
}

console.log(Object.keys(person)) // [1', 'name', 'age', 'hobbies','address', 'gender','active',  'email' ]

console.log('---------------------------------')

for(let key in Object.keys(person)){
    console.log(key) // 0 to 7
}

console.log('---------------------------------')

for(let key of Object.keys(person)){
    console.log(key) // 1 name age hobbies
}

console.log('---------------------------------')

// Map :- key can be anything
// we can use for of loop in Map object but not in map method

const person2 = new Map()
person2.set('firstname', 'Sandip')
person2.set('age', 7)
person2.set(1, 'one')
console.log(person2) // Map(2) { 'firstname' => 'Sandip', 'age' => 7, 1 => 'one' } 
 
console.log(person2.age)     // undefined
console.log(person2.get(1)) // one

console.log(person2.keys()) // [Map Iterator] { 'firstname', 'age', 1 } 

for(let key of person2.keys()){
    console.log(person2.get(key)) // Sandip 7 one
}

console.log('---------------------------------')

// for of loop
for (let key of person2){
    console.log(key) // [ 'firstname', 'Sandip' ] [ 'age', 7 ] [ 1, 'one' ] this key value pairs are array
    console.log(typeof key) // object 
    console.log(Array.isArray(key)) // true
}

console.log('--------------------------------------')

// After destructuring
for (let [key, value] of person2){
    console.log(key, value) // firstname Sandip age 7 1 one
    console.log(typeof key) // string :- after destructuring its become string
    console.log(Array.isArray(key)) // false
}


const person3 = new Map([['name', 'sandy'], ['age', 28]])
console.log(person3) // Map(2) { 'name' => 'sandy', 'age' => 28 } 

console.log('---------------------------------------')

const user = {
    id : 1,
    name : 'sandip'
}

const userInfo = new Map();
userInfo.set(user, {age : 28, gender: 'male'})
console.log(userInfo) // Map(1) { { id: 1, name: 'sandip' } => { age: 28, gender: 'male' } } 
console.log(userInfo.get(user)) // { age: 28, gender: 'male' }
console.log(userInfo.get(user).age) // 28

