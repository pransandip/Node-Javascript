const person = { name: "Sandip", age: 28 }
// console.log(person) // { name: 'Sandip', age: 28 }

const key = 'email'
const employee = {
    name: "Sandip Roy",
    age: 28,
    hobbies: ['computer lab', 'big House', 'traveling'],
    'Home address': 'kalchini, 735217, Alipurduar, WB',
}
console.log(employee)

// ?-- In javascript object keys are in string by default --? //
console.log(employee['hobbies']) // [ 'computer lab', 'big House', 'traveling' ] 

// how to add key value pair to objects
// dot notation
employee.gender = 'Male';
console.log(employee) // gender: 'Male' Added to employee object

//bracket notation
employee['active'] = true
console.log(employee) //  active: true added

// for spaces used bracket notation
console.log(employee['Home address']) // kalchini, 735217, Alipurduar, WB

employee[key] = 'pransandip@gmail.com'
console.log(employee)

// ?--- How to iterate object ---? //
const details = {
    name: 'Sandip Roy',
    age: 28,
    hobbies: ['computer lab', 'big House', 'traveling'],
    address: 'kalchini, 735217, Alipurduar,WB',
    gender: 'Male',
    active: true,
    email: 'pransandip@gmail.com'
}

for(let key in details){
    console.log(key) // name age.. etc
}

for(let key in details){
    console.log(details[key]) // sandip Roy.. etc
}


