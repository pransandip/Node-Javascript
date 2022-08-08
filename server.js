const char = "hdsldgld454lgdlgldglgdL"
console.log(char[char.length - 1])  // L

const char2 = "   dddiiiludil    "
console.log(char2.length) //18
console.log(char2.trim().length) //11
console.log(char2.length) //18 :-> this is happening because strings are immutable char2.trim() it will give new string

const char3 = "Sandip Roy"
console.log(char3.slice(0, 4)) //Sand

const age = 27;
console.log(typeof (age + '')) //string

let num = +"001"
console.log(typeof num) //number

let num2 = "45465"
console.log(typeof (Number(num2))) //number

let something;
console.log(something) //undefined

const something2 = []
console.log(typeof something2) //object  
something2.push(2121)
console.log(something2) //[ 2121 ] 

console.log(Number.MAX_VALUE) //1.7976931348623157e+308

let a = 12
let b = 12

console.log(a != b) //false
console.log(a !== b) //false :- it will check data type as well
console.log(!a != b) //true
console.log(!a) //false
console.log(!!a) //true :- it's a bang bang boolean
console.log(!!!a) //false 

console.log(9 % 7) // :- reminder 2
console.log(10 % 5) // :- reminder 0
