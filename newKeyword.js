// new keyword
// 1.) creats empty object this = {} 
// 2.) then its added key value pair for Ex- this.firstName = firstName;
// 3.) return 'this' , means that object

function createUser(firstName, age){
    // Ex- this = {} empty obj
    this.firstName = firstName;
    this.age = age;
}

createUser.prototype.about = function(){
    console.log(this.firstName, this.age)
}

const user1 = new createUser('Sandip', 28)
console.log(user1) // It's become Object :- createUser { firstName: 'Sandip', age: 28 }

console.log(user1.firstName) // Sandip
user1.about() // Sandip 28

