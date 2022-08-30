/** Reference datatype & arrays are mutable */
let obj = {}; // object literals
let mixed = ['kiwi', 'peach', 'grapes']
mixed[1] = 'oranges'
console.log(mixed) //[ 'kiwi', 'oranges', 'grapes' ]

console.log(typeof mixed) //object
console.log(Array.isArray(mixed)) //true
console.log(typeof obj) //object
console.log(Array.isArray(obj)) //false

// push and pop is faster than shift and unshift

/** push() can change original array.. arrays are mutable its only happens in reference type not in premetive type */ 
mixed.push("banana")
console.log(mixed) //[ 'kiwi', 'oranges', 'grapes', 'banana' ]  

/** unshift will add element begining of a array */ 
console.log(mixed.unshift('mangos', 'melon')) //6
console.log(mixed) //[ 'mangos', 'kiwi', 'oranges', 'grapes', 'banana' ]

/** shift will remove element from begining of a array */
mixed.shift()
console.log(mixed)

console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]