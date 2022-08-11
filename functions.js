// function is a block of code that is executed to do certain task in program
/** Function declaration **/
function add() {
    return 2 + 4;
}
console.log(add()) // 6
const result = add()
console.log(result) // 6


function substract(num1, num2) {
    return num1 - num2
}
console.log(substract(4, 2)) // 2
console.log(substract()) // NaN :- because undefined - undefined = Not a number
console.log(substract(undefined, undefined)) // // NaN 


function firstChar(anyString) {
    return anyString[0]
}
console.log(firstChar('abc'))  // a

// ?---------------------------------------------------------? //
// ?-- input : array, target(number) ------------------------? //
// ?-- output : index of target if target present in array --? //
// ?---------------------------------------------------------? //

function findTarget(array, target) {
    for (let item in array) {
        if (array[item] === target) { return item }
        //console.log(item)   // 0 :- its looping through one item, because returning -1 terminates function.
        //return -1
        // console.log('item->', array[item]) // :- now its looping item-> 1 & item-> 3, teminates when match case 
    }
    return -1
}

console.log(findTarget([1, 3, 8, 90], 8)) // 2


/** Function expression **/
//:- In func expression we assign a variable to func

const reverse = function(str){
    return (str === '') ? '' : reverse(str.substr(1)) + str.charAt(0);
}

console.log(reverse('sandy'))  // ydnas


//** Arrow Functions */

const printName = () =>{
    console.log('Sandip Roy')
}
printName(); // Sandip Roy

// more than one or no parameter have to use parenthesis
const isEven = number => {
    return number % 2 === 0;
}
console.log(isEven(4)) // true

// Function expression is one liner no need of return keyword
const isArray = number => Array.isArray(number)
console.log(isArray({..."jgkg"})) // false

const firstLatter = char => char[0]
console.log(firstLatter('sandy')) // s 
