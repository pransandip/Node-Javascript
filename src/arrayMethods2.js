const users = [
    { firstName: 'Sandip', age: 28 },
    { firstName: 'Avi', age: 23 },
    { firstName: 'papai', age: 28 },
    { firstName: 'harshit', age: 28 },
]

const firstName = users?.length > 0 ? users.map((items) => {
    return items.firstName
}) : 'Some error'

console.log(firstName) // [ 'Sandip', 'Avi', 'papai', 'harshit' ]


// filter method
// check even
const numbers = [4, 5, 6, 7, 9, 3, 8]

const isEven = function (number) {
    return number % 2 === 0;
}

const evenNumbers = numbers.filter(isEven)
console.log(evenNumbers) // [ 4, 6, 8 ]

// check odd
const oddNumbers = numbers.filter((items) => {
    return items % 2 !== 0;
})
console.log(oddNumbers) // [ 5, 7, 9, 3 ]


// reduce method :- it will not return an array
// aim: sum of all the numbers in the array
const numbers2 = [1, 2, 3, 4, 5, 6]

const sum = numbers2.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
})

console.log(sum) // 21

const cart = [
    { productId: 1, poductName: 'mobile', price: 20000 },
    { productId: 2, poductName: 'laptop', price: 60000 },
    { productId: 3, poductName: 'monitor', price: 15000 },
]

const totalAmount = cart.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price
}, 0)

console.log(totalAmount) // 95000


// sort method mutate the original array means it will change

const number$set = [1, 2, 5, 9, 7, 6]

console.log(number$set) // [ 1, 2, 5, 9, 7, 6 ]
number$set.sort()
console.log(number$set) // [ 1, 2, 5, 6, 7, 9 ]

// if cap letter present then it will be sorted first :- this char sorting happens with ASSCI code
const alphabet = ['c', 'f', 'B', 'd', 'a', 'b', 'h', 'g', 'A']

console.log(alphabet.sort()) // ['A', 'B', 'a','b', 'c', 'd','f', 'g', 'h']


// sort() method taking a callback function, if a-b returns positive ? b : a
// to sort() in desending order use b-a

const number$set2 = [1, 2, 5, 9, 7, 6]

number$set2.sort((a,b)=>{
    return b-a;
})

console.log(number$set2) // [ 9, 7, 6, 5, 2, 1 ]


// price low to high HighToLow

const products = [
    { productId: 1, poductName: 'mobile', price: 20000 },
    { productId: 2, poductName: 'laptop', price: 60000 },
    { productId: 3, poductName: 'monitor', price: 15000 },
    { productId: 4, poductName: 'iphone', price: 150000 },
]

// LowToHigh :- a & b will become obj
const lowToHigh =  products.slice(0).sort((a,b)=>{
    return a.price-b.price
})

console.log(lowToHigh)  // [...{price: 15000}, ...{price: 20000}] 😊

// HighToLow
const HighToLow =  products.slice(0).sort((a,b)=>{
    return b.price-a.price
})

console.log(HighToLow) // [...{price: 150000}, ...{price: 60000}] 😊

console.log(products) // now its not changing original array