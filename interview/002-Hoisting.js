// Hoisting
// The movement of variable declaration to top of scope - before execution

/*-------- BREAK ---------*/

// var is hoisted.
a = 2;
console.log(a);
var a;

/*-------- BREAK ---------*/

//function declarations are properly hoisted (value accessible)
say();

function say() {
  console.log("hi");
}

/*-------- BREAK ---------*/

// take declaration at the top of scope
// let k = 99;
// {
//   console.log(k);

//   let k = 100;
// }

/*-------- BREAK ---------*/

let name1 = "john";
sayHi();

function sayHi() {
  let greet = "hi";
  console.log(name1);
}

// var maintain function scope
// var yy = "sandy";
function name() {
  var yy = "sandip";
}

console.log(yy);
