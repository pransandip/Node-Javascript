// Sets (it is iterable) :- its a kind of array
// stores data
// sets also have its own methods
// No index-based access
// Order is not guaranteed
// unique items only(no duplicates allowed)
// you cant use .length propery it will throw undefined

const items = new Set(); // this is how Set() define

const numbers = new Set([1, 2, 3])
console.log(numbers)  // Set(3) { 1, 2, 3 }


const animals = ['Hello', 'cat', 'dog', 'lion']

items.add(1)
items.add(2)
items.add(2) // set will ignore this
items.add(animals)
items.add(animals) // set will ignore this
console.log('items->', items) // items-> Set(3) { 1, 2, [ 'Hello', 'cat', 'dog', 'lion' ] }

console.log('---------------------------------')

const newSet = new Set();
newSet.add(['item1', 'item2'])
newSet.add(['item1', 'item2'])
console.log(newSet) // Set(2) { [ 'item1', 'item2' ], [ 'item1', 'item2' ] } :- because it's a two different memory location

console.log('---------------------------------')

const animals2 = new Set(animals);
console.log(animals2) // Set(4) { 'Hello', 'cat', 'dog', 'lion' }

console.log(animals2.has('cat')) // true

if (animals2.has(1)) {
    console.log('present')
} else {
    console.log('not present') // not present 
}

console.log('---------------------------------')

// for of loop
for (let animal of animals2) {
    console.log(animal)  // Hello cat ...
}

console.log('---------------------------------')

const myArray = [1, 2, 2, 3, 4, 4, 5, 6, 6]
const uniqueNumbers = new Set(myArray)
console.log(uniqueNumbers) // Set(6) { 1, 2, 3, 4, 5, 6 } 
console.log(uniqueNumbers.size) // 6 

