// array destructuring
const arr = ['sandy', 'sandip', 'shuvam']
let [var1, var2, var3, var4] = arr;
var3 = 'babai' // if it was const we not able to change that
console.log(var1) // sandy
console.log(var2) // sandip
console.log(var3) // babai
console.log(var4) // undefined

const mynewArray = arr.slice(1)
console.log(mynewArray) // [ 'sandip', 'shuvam' ]

const arr2 = ['sandy', 'sandip', 'shuvam', 'babai']
let [item1, item2, ...arr3] = arr2
console.log(item1) // sandy
console.log(item2) // sandip
console.log(arr3) // [ 'shuvam', 'babai' ] 


