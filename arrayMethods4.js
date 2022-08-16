// splice method
// start, delete, insert

const myArray = ['item1', 'item2', 'item3']

// delete
myArray.splice(1, 1) // 
console.log(myArray) // :-my original array is like [ 'item1', 'item3' ]

// insert
myArray.splice(1, 0, 'sandy')
console.log(myArray)  // [ 'item1', 'sandy', 'item3' ]

// insert and delete at same time
const deletedItems = myArray.splice(0, 3, 'sandip', 'shuvam', 'sandy')
console.log(deletedItems)  // [ 'item1', 'sandy', 'item3' ]  
console.log(myArray)      // [ 'sandip', 'shuvam', 'sandy' ]

// iterables
// where we can use for of loop :- string and array is iterable but object is not iterable
const firstname = 'Sandip';
for(let char of firstname){
    console.log(char) // s a n d i p
}

// Array like object
// those who have length property and can be acccessed by index ex:- string
console.log(firstname.length) // 6
console.log(firstname[0]) // s







