// hoisting
// You cannot do it with function expression it will throw an error
hello();

function hello() {
    console.log('Hello') // Hello
}

// instade of var if we use let or const it will throw an error
console.log(str); // undefined
var str = "Sandip Roy"
console.log(str); // Sandip Roy



// functions inside function

const calc = () => {
    const add = (num1, num2) => {
        return num1 + num2
    }
    const mul = (num1, num2) => {
        return num1 * num2
    }
    console.log(add(1, 2), mul(3, 4))

}
calc(); // 3, 12

// lexical scope
// myVar not present in myFunc then it will look for in his lexical environment that is in myApp Func
// now if it is not present in lexical scope it will look myVar in global scope and print
function myApp() {
    const myVar = "value1"
    function myFunc() {
        // const myVar = "value69"
        console.log("Inside myFunc", myVar)
    }
    const myFunc2 = function () { }
    const myFunc3 = () => { }
    console.log(myVar);  // value1
    myFunc();            // Inside myFunc value1
}

myApp();

// ?---------------------------------------------------------? //
// ?------------ Block scope vs function scope --------------? //
// ?-- let & const are block scope var is a function scope --? //
// ?---------------------------------------------------------? //

{
    let my$name = "Shuvam"
    console.log(my$name)  // Shuvam
}

// console.log(my$name) // ReferenceError: my$name is not defined

{
    let my$name = "babai" // Can use same variable name because it's a different block 
    console.log(my$name)  // babai
}

// console.log(my$name) // ReferenceError: my$name is not defined

{
    // ?-- Block scope --? //
    const my$name = "Sandip"
    console.log(my$name)  // Sandip
}

// console.log(my$name) // ReferenceError: my$name is not defined

{
    // ?-- func scope --? //
    var my$name = "Sandy"
    console.log(my$name)  // Sandy 
}

console.log(my$name)  // Sandy 


// another example :-

if (true) {
    var txt = "Hello"
    console.log(txt) // Hello
}

console.log(txt) // Hello
// console.log("let txt->", txt) // If it was let then :- ReferenceError: txt is not defined


// another example :-

let random$number = Math.random().toFixed(1)
function genUniqueNum() {
    if (true) {
        let random$number = Math.random().toFixed(2);
        console.log(random$number) // 0.99
    }
    console.log(random$number) // 0.3
}

genUniqueNum();

// Default parameters

function addTwo1(a, b) {
    return a + b
}

const ans1 = addTwo1(4)
console.log(ans1) // NaN

// Now Before ES15

function addTwo2(a, b) {
    if (typeof b === 'undefined')
        b = 1

    return a + b
}

const ans2 = addTwo2(4)
console.log(ans2) // 5


// Now After ES15

function addTwo3(a, b = 0) {
    return a + b
}

const ans3 = addTwo3(5)
console.log(ans3) // 5


// Rest parameters

function abc1(a, b, c) {
    console.log(`a is ${a}`)
    console.log(`b is ${b}`)
    console.log(`c is ${c}`)
}

abc1(3, 5, 6, 6, 8, 9, 7); // a is 3 | b is 5 | c is 6

function abc2(a, b, ...c) {
    console.log(`a is ${a}`)
    console.log(`b is ${b}`)
    console.log(`c is ${c}`)
}

abc2(3, 5, 6, 6, 8, 9, 7); // a is 3 | b is 5 | c is 6,6,8,9,7 


// In above example c is printing like that because it's a string template, actually it's an Array

function abc3(a, b, ...c) {
    console.log(`a is ${a}`)
    console.log(`b is ${b}`)
    console.log(`c is `, c)
}

abc3(3, 5, 6, 6, 8, 9, 7); // a is 3 | b is 5 | c is [ 6, 6, 8, 9, 7 ]


// Rest parameter takes collection of items as input and return output as array

function printAll(...numbers){
    console.log(numbers)          // [ 1, 2, 3, 4, 5, 6 ]
    console.log(Array.isArray(numbers)) // true
}

printAll(1,2,3,4,5,6);

function addAll(...numbers){
    let total = 0;
    numbers.forEach(element => total += element)
    return total
}

const res1 = addAll(1,2,3,4,5,6);
console.log(res1) // 21


function addAll2(...numbers){
    let total = 0;
    for(let item of numbers){
        total = total + item
    }
    return total
}

const res2 = addAll2(1,2,3,4,5,6,);
console.log(res2) // 21 

