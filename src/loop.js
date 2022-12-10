console.log("gcdugcuds"[0]) //g

let array1 = ['item1', 'item2', 'item3']
console.log(array1[1]) //item2
console.log("============")

let mixed = []
for (let i = 0; i <= array1.length - 1; i++) {
    mixed.push(array1[i].toLocaleUpperCase())
}

console.log(mixed) // [ 'ITEM1', 'ITEM2', 'ITEM3' ]

const arr = ["kiwi", "banana"]
console.log(arr.pop()) // banana
console.log(arr.pop()) // kiwi
console.log(arr) // []


const newFruits = []

// for of loop gives items
let fruits = ['apple', 'banana', 'cherry']
for (let item of fruits){
newFruits.push(item.toUpperCase())
}

console.log(newFruits) //[ 'APPLE', 'BANANA', 'CHERRY' ]

// for in  loop gives indexes

for (let i in fruits){
    console.log(i) // 0,1,2
}

for (let i in fruits){
    console.log(fruits[i]) // 0,1,2
}









