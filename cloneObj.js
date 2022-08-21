// clone using Object.assign
// obj sotred in heap memory

const user = {
    id : 1,
    name : 'sandip'
}


// const user2 = {...user}  //:- used spread operator to copy obj so it's not provide the memory location
const user2 = user  // it's providing address of the object from memory
console.log('user2->', user2) // user2-> { id: 1, name: 'sandip' }

user2.gender = 'male'

console.log('user->', user) // user-> { id: 1, name: 'sandip', gender: 'male' }
console.log('user2->', user2) // user2-> { id: 1, name: 'sandip', gender: 'male' }

