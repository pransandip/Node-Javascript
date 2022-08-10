let obj = { name: 'sandy', age: 27, gender: 'Male' }


for (let value of Object.values(obj)) {
    console.log(value)
}

const arr1 = [...'abcdef']
const arr2 = [...'ace']
const arr3 = []
console.log(arr1)
arr1.forEach((element, index, array) => arr2.includes(element) ? arr3.push(`${index}${element}`) : arr3.push(''))
console.log(arr3)