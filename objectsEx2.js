const person = {
    firstName: 'Sandy',
    lastName: 'Roy',
    age: 28,
    email: 'pransandip@gmail.com',
    address: 'A/21, Golf green, Tollygunge, kolkata 700040',
    about() {
        return `name is ${this.firstName} ${this.lastName} : age is ${this.age}`
    },
    is18() {
        return this.age >= 18;
    }
}

const employee = person.about()
console.log(employee) // name is Sandy roy : age is 28


// function(that function create objects)
// 2.)add key value pair
// 3.)and returns object

function create_user0(Obj) {
    const is18 = function() { return Obj.age >= 18; }
    const about = function() { return `name is ${Obj?.firstName} ${Obj?.lastName} : age is ${Obj?.age}`}
    const user = {}
    user.firstName = Obj?.firstName;
    user.lastName = Obj?.lastName;
    user.age = Obj?.age;
    user.email = Obj?.email;
    user.address = Obj?.address;
    user.about = about(),
    user.is18 = is18()
    return user;
}

const user0 = create_user0({firstName: 'Sandy', lastName: 'Roy', age: 28, email: 'pransandip@gmail.com', address: 'A/21, Golf green, Tollygunge, kolkata 700040',})
console.log(user0) // {firstName: 'Sandy', about: 'name is Sandy Roy : age is 28', is18: true, lastName: 'Roy', age: 28, email: 'pransandip@gmail.com', address: 'A/21, Golf green, Tollygunge, kolkata 700040', …}


function create_user1(Obj) {
    const user = {}
    user.firstName = Obj?.firstName;
    user.lastName = Obj?.lastName;
    user.age = Obj?.age;
    user.email = Obj?.email;
    user.address = Obj?.address;
    user.about = function () { return `name is ${this.firstName} ${this.lastName} : age is ${this.age}`}
    user.is18 = function () { return this.age >= 18; }
    return user;
}

const user1 = create_user1({firstName: 'Sandy', lastName: 'Roy', age: 28, email: 'pransandip@gmail.com', address: 'A/21, Golf green, Tollygunge, kolkata 700040',})
console.log(user1) // {firstName: 'Sandy', lastName: 'Roy', age: 28, email: 'pransandip@gmail.com', address: 'A/21, Golf green, Tollygunge, kolkata 700040', …}



const userMethods = {
    about() { return `name is ${this.firstName} ${this.lastName} : age is ${this.age}`},
    is18 () { return this.age >= 18; }
}

function create_user2(Obj) {
    const user = Object.create(userMethods) // {} :-its a empty object we returning it
    user.firstName = Obj?.firstName;
    user.lastName = Obj?.lastName;
    user.age = Obj?.age;
    user.email = Obj?.email;
    user.address = Obj?.address;
    // user.about = userMethods.about; // its storing the reference
    // user.is18 = userMethods.is18;
    return user;
}

const user2 = create_user2({firstName: 'Sandy', lastName: 'Roy', age: 28, email: 'pransandip@gmail.com', address: 'A/21, Golf green, Tollygunge, kolkata 700040',})
console.log(user2) // {firstName: 'Sandy', lastName: 'Roy', age: 28, email: 'pransandip@gmail.com', address: 'A/21, Golf green, Tollygunge, kolkata 700040', …}
console.log(user2.is18()) // true
console.log(user2.about()) // name is Sandy Roy : age is 28

