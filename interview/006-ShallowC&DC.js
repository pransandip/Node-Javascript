let person = { name: "sandy" };
let newPerson = Object.assign({}, person); // (target, reference) it will create new memory location
console.log(newPerson);

person["age"] = 20;
console.log(person);
console.log(newPerson);

/*-------- BREAK ---------*/
// sCopy
let addressObject = { city: "delhi", state: "delhi" };

let person1 = {
  name: "John",
  address: addressObject,
};

let sCopy = Object.assign({}, person1);
sCopy.name = "x";
sCopy.address.city = "Y";
console.log(sCopy, person1);

/*-------- BREAK ---------*/
// dCopy
let addressObject2 = { city: "Kolkata", state: "WB" };

let person2 = {
  name: "John",
  address: addressObject2,
};

let dCopy = JSON.parse(JSON.stringify(person2));
dCopy.name = "x";
dCopy.address.city = "Y";
console.log(dCopy, person2);
