// important Array methods forEach, map, filter, reduce, find, sort, every, some, fill

const num_set = [4, 5, 6, 7, 9, 3, 8]

function multiplyBy2(number, index) {
    console.log('index is', index)              // index is 0
    console.log(`${number}*2 = ${number * 2}`)   // 4*2 = 8
}

for (let i in num_set) {
    multiplyBy2(num_set[i], i)
}

console.log('==============================')

// forEach
// forEach do not return a new array

num_set.forEach(multiplyBy2)  // index is 0 | 4*2 = 8...

console.log('==============================')

//forEach passing Arguments to  Anonomus function

num_set.forEach(function (number, index) {
    console.log(`index is ${index} number is ${number}`) //index is 0 number is 4...
})

console.log('==============================')

const users = [
    { firstName: 'Sandip', age: 28 },
    { firstName: 'Avi', age: 23 },
    { firstName: 'papai', age: 28 },
    { firstName: 'harshit', age: 28 },
]

users.forEach(function (user) {
    console.log(user.firstName)  // Sandip...
})

console.log('==============================')

users.forEach(item => console.log(item.firstName)) // Sandip...

console.log('==============================')

for (let item of users) {
    console.log(item) // { firstName: 'Sandip', age: 28 }
}


console.log('=====================================')

// map method
// :- square is a call back function &  map method sending arguments to square function 
// :- map allways create a new array


const numbers = [1, 2, 3, 4, 5, 6, 7]

const square = function (number) {
    return number * number
}

const result = numbers.map(square)
console.log(result) // [1,  4,  9, 16, 25, 36, 49 ]


console.log('=======================================')

// If we do not return anything by default it's return undefined :- if u using map u should return something

const numbers2 = [1, 2, 3, 4, 5, 6, 7]

const square2 = function (number) {
    console.log(number * number) // 1, 4, 9, 16, 25, 36, 49 :- it's not an array
}

const result2 = numbers2.map(square2)
console.log(result2)  // [ undefined, undefined, undefined, undefined, undefined, undefined, undefined]


console.log('=======================================')

const sqareaNumber = numbers2.map((items) => {
    return items * items
})

console.log(sqareaNumber) // [1,  4,  9, 16, 25, 36, 49]
