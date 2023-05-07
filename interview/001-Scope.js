// let
//* re-declaration is NOT allowed
//* r-assignment allowed

// Global scope
let a = 100;
let b = 0;

{
  // block scope
  let a = 2;
  a = 6;
  console.log(a);
}

console.log(a);

// const
//* re-declaration is NOT allowed
//* r-assignment is NOT allowed
{
  const j = 10;
  console.log(j + 2);
  console.log(j);
}

//* TDZ : (Temporal dead zones) The area in which a variable
//* not accessible. Temporal because it depends on time of
//* execution not position.
{
  const say = () => console.log(msg);

  let msg = "hi";
  say();
}

// Variable Shadowing
let x = 20; // shadowed variable
{
  let x = 10;
  console.log(x);
}
console.log(x);

// Var
//* it doesn't have any block-scope, and can be re-declared
//* it only have function-scope
//* var are hoisted so it can be used before declaration
var k = 44;
{
  var k = 55;
  console.log(k);
}
console.log(k);

//* on hoisting: at compile time javascript takes deceleration
//* at the top, not initialization.
y = 4;
console.log(y);
var y;

/*-------- BREAK ---------*/
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
} // prints: 0, 1, 2, 3, 4

var i;
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
} // prints: 5, 5, 5, 5, 5

/*-------- BREAK ---------*/
// Global Object
//* The global Object is the variable window in case of browser.
//* This helps you to use variables across the scopes. Also,
//* it is the this value for global functions
//* window.alert
//* window.Promise
//* In non-browser environment, window doesn't exist. but other global objects exist.
//* var affects this global object, also function declarations.

/*-------- BREAK ---------*/
// function scope
// it is created upon execution a function
function sayHi(name) {
  return name;
}

sayHi(); // this call will create a function scope

sayHi(); // this call will create another function scope
