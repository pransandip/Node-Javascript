// const numbers = [1, 2, 3]
const numbers = new Array(1, 2, 3);
console.log(Array.prototype) // [constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]
console.log(numbers.__proto__) // [constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]
console.log(Object.getPrototypeOf(numbers)) // [constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]
console.log(numbers)

function Hello(){
    console.log('Hello')
}

console.log(Hello.prototype) // {constructor: ƒ}
Hello.prototype = []
console.log(Array.isArray(Hello.prototype)) // true
Hello.prototype.push('item1')
console.log(Hello.prototype)  // [ 'item1' ]
 