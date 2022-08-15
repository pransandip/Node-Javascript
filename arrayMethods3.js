// find method :- first item it's matches return :- if there is no match return undefind

const animals = ['Hello', 'cat', 'dog', 'lion']

function isLength3(string) {
    return string.length === 3;
}

console.log(isLength3("sandip")) // false
console.log(animals.find(isLength3)) // cat
console.log(animals.map(isLength3)) // [ false, true, true, false ]
console.log(animals.forEach(isLength3)) // undefined
const ans = animals.find((string) => string.length === 4)
console.log(ans) // lion

const user = [
    { userId: 1, userName: 'sandy001' },
    { userId: 2, userName: 'Avi@43' },
    { userId: 3, userName: 'kajol' },
    { userId: 4, userName: 'riju@@221' },
]

const myUser = user.find((item) => item.userId === 2)

console.log(myUser) // { userId: 2, userName: 'Avi@43' } 


// every method

const numbers = [2, 4, 6, 8, 10]
console.log(numbers.every((item) => item % 2 === 0)) // true

// some method

const numbers2 = [3, 9, 7, 10]
console.log(numbers.some((item) => item % 2 == 0)) // true


const cart = [
    { productId: 1, poductName: 'mobile', price: 20000 },
    { productId: 2, poductName: 'laptop', price: 60000 },
    { productId: 3, poductName: 'monitor', price: 15000 },
]
const ans2 = cart.some((item) => item.price > 50000)
console.log(ans2) // true

// fill method
// use new keywork for Array constructor

const myArray = new Array(10).fill(-1)
console.log("🚀 ~ myArray", myArray) // 🚀 ~ myArray [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]

const myArray2 = [4, 5, 6, 7, 9, 3, 8]
myArray2.fill(0, 1, 4)
console.log(myArray2) // [4, 0, 0, 0, 9, 3, 8]