// spread operator with array

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const arr3 = [...arr1, ...arr2]
console.log('arr3 ->', arr3) // arr3 -> [ 1, 2, 3, 4, 5, 6 ]

// rest operator

const [one, two, ...rest] = arr3
console.log("🚀 one ->", one) // 🚀 one -> 1
console.log("🚀 two ->", two) // 🚀 two -> 2
console.log("🚀 rest ->", rest) // 🚀 rest -> [ 3, 4, 5, 6 ]

// strings are iterable
const char = [...'abc', 'd', 'e']
console.log('char->', char) // char-> [ 'a', 'b', 'c', 'd', 'e' ]


let obj = {
    key1: 'value1',
    key2: 'value2',
    key1: 'value3',
}
console.log('obj ->', obj) // obj -> { key1: 'value3', key2: 'value2' } last key override first key


// spread operator with objects

const obj2 = {
    key1: 'value1',
    key2: 'value2',
}
const obj3 = {
    key1: 'valueUnique',
    key3: 'value3',
    key4: 'value4',
}

let newObj = { obj2 }
console.log('newObj->', newObj) // newObj-> { obj2: { key1: 'value1', key2: 'value2' } }


let newObj2 = { ...obj2, ...obj3, key69: 'value69' }
console.log('newObj2->', newObj2) // newObj2-> { key1: 'valueUnique', key2: 'value2', key3: 'value3', key4: 'value4', key69: 'value69' }


const strObj = { ...'abc' }
console.log('strObj->', strObj) // strObj-> { '0': 'a', '1': 'b', '2': 'c' }


// spread a array into object

const strObj2 = { ...['a', 'b', 'c', 'd'] }
console.log('strObj2->', strObj2) // strObj2-> { '0': 'a', '1': 'b', '2': 'c', '3': 'd' }


// position of values 

const alpha = { ..."abcdefghijklmnopqrstuvwxyz" }
console.log('alpha->', alpha) // alpha-> {'0': 'a', '1': 'b', '2': 'c', ...}


// destruturing assign to variable

const name1 = {
    firstName: 'Sandy',
    lastname: 'Ry'
}

const { firstName, lastname } = name1
console.log(firstName, lastname) // Sandy Ry


const { firstName: var1, lastname: var2 } = name1
console.log(var1, var2) // Sandy Ry


// rest operator in object 

const fruits = {
    item1: 'kiwi',
    item2: 'peach',
    item3: 'grapes',
    item4: 'mango',
}

const { item1, item2, ...resrObj } = fruits
console.log(resrObj) // { item3: 'grapes', item4: 'mango' }


// objects inside array

const testArr = [{}, {}, {}]
testArr[0].gender = 'Male';
console.log(testArr) // [ { gender: 'Male' }, {}, {} ]


const users = [
    { userId: 1, username: 'sandy001', age: 27 },
    { userId: 2, username: 'avi768', age: 22 },
    { userId: 3, username: 'user@31', age: 25 },
]

for (let obj of users) {
    console.log(obj.username) // { userId: 1, username: 'sandy001', age: 27 } ...
}


// nested destructuring

const user = [
    { userId: 1, username: 'sandy001', age: 27 },
    { userId: 2, username: 'avi768', age: 22 },
    { userId: 3, username: 'user@31', age: 25 },
    { userId: 4, username: 'user007', age: 30 },
]

const [user1, user2, ...rest$user] = user
console.log(user1) // { userId: 1, username: 'sandy001', age: 27 }
console.log(rest$user) // [{ userId: 3, username: 'user@31', age: 25 }, { userId: 4, username: 'user007', age: 30 }]

// user 1 userId and user 4 age
const [{userId:userOneId, username}, , , {age:userFourAge}] = user
console.log(userOneId) // Sandy
console.log(username) // sandy001
console.log(userFourAge) // 30
