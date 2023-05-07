//* we can create nested functions in JavaScript
function createUser(name) {
  let greeting = "Hi ";
  function greet() {
    return greeting + name + " is Created";
  }
  return greet();
}

// prints: Hi john is created;
console.log(createUser("john"));

/*-------- BREAK ---------*/

//* Now more useful work is if we can return the greet function itself.
function createUser2(name) {
  let greeting = "Hi ";
  function greet() {
    return greeting + name + " is Created";
  }
  return greet; // returned just definition of function
}

let welcomeJohn = createUser2("john");
let welcomeJack = createUser2("jack");
// prints: Hi john is created;
console.log(welcomeJohn());
console.log(welcomeJack());

/*-------- BREAK ---------*/

function initCounter() {
  let count = 0;
  return function () {
    return count++;
  };
}

let counter = initCounter();
console.log(counter());
console.log(counter());

let counter1 = initCounter();
console.log(counter1());
console.log(counter1());
