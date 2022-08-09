// spread operator with array

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const arr3 = [...arr1, ...arr2]
console.log('arr3 ->', arr3) // arr3 -> [ 1, 2, 3, 4, 5, 6 ]

// rest operator

const [one, two, ...rest] = arr3
console.log("🚀 one ->", one) // 🚀 one -> 1
console.log("🚀 two ->", two) // 🚀 two -> 2
console.log("🚀 rest ->", rest) // 🚀 rest -> [ 3, 4, 5, 6 ]

// strings are iterable
const char = [...'abc', 'd', 'e']
console.log('char->', char) // char-> [ 'a', 'b', 'c', 'd', 'e' ]


let obj = {
    key1: 'value1',
    key2: 'value2',
    key1: 'value3',
}
console.log('obj ->', obj) // obj -> { key1: 'value3', key2: 'value2' } last key override first key


// spread operator with objects

const obj2 = {
    key1: 'value1',
    key2: 'value2',
}
const obj3 = {
    key1: 'valueUnique',
    key3: 'value3',
    key4: 'value4',
}

let newObj = { obj2 }
console.log('newObj->', newObj) // newObj-> { obj2: { key1: 'value1', key2: 'value2' } }

let newObj2 = { ...obj2, ...obj3, key69: 'value69' }
console.log('newObj2->', newObj2) // newObj2-> { key1: 'valueUnique', key2: 'value2', key3: 'value3', key4: 'value4', key69: 'value69' }

const strObj = { ...'abc' }
console.log('strObj->', strObj) // strObj-> { '0': 'a', '1': 'b', '2': 'c' }

// spread a array into object

const strObj2 = { ...['a', 'b', 'c', 'd'] }
console.log('strObj2->', strObj2) // strObj2-> { '0': 'a', '1': 'b', '2': 'c', '3': 'd' }

// position of values 

const alpha = { ..."abcdefghijklmnopqrstuvwxyz" }
console.log('alpha->', alpha) // alpha-> {'0': 'a', '1': 'b', '2': 'c', ...}