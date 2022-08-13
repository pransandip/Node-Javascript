// param destructuring

const person = {
    firstname: 'Sandip',
    gender: 'Male'
}

function printDetails(obj) {
    console.log(obj.firstname) // Sandip
    console.log(obj.gender)    // Male
    console.log(obj.age)    // undefined
}
printDetails(person);


function printDetails2({ firstname, gender }) {
    console.log(firstname) // Sandip
    console.log(gender)    // Male
}

printDetails2(person);

function printArray(val) {
    console.log(val[0])     // peach
    console.log(val[1])    // kiwi
}

printArray(['peach', 'kiwi', 'grapes']);

function printArray2([val1, ...val3]) {
    console.log(val1)     // peach
    console.log(val3)    // [ 'kiwi', 'grapes' ]
}

printArray2(['peach', 'kiwi', 'grapes']);