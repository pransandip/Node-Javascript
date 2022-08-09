/** reference type */
let array1 = ['item1', 'item2']
let array2 = array1

console.log('array1->', array1) //array1-> [ 'item1', 'item2' ]
console.log('array2->', array2) //array2-> [ 'item1', 'item2' ]

array2.push('item3')

console.log('array1->', array1) //array1-> [ 'item1', 'item2', 'item3' ]
console.log('array2->', array2) //array2-> [ 'item1', 'item2', 'item3' ]

console.log(array1===array2) //true

/** how to clone a array & how to concat two arrays */
let array3 = array2.slice(0)
let array4 = array2.slice(0, 2)

console.log('array3->', array3) //array3-> [ 'item1', 'item2', 'item3' ]
console.log('array4->', array4) //array4-> [ 'item1', 'item2' ]

let array5 = [].concat(array3)
console.log('array5->', array5) //array5-> [ 'item1', 'item2', 'item3' ]

let array6 = [...array5]
console.log('array6->', array6) //array6-> [ 'item1', 'item2', 'item3' ]

let array7 = array6.slice(0).concat(['item4','item5'])
console.log('array7->', array7) //array7-> [ 'item1', 'item2', 'item3', 'item4', 'item5' ]

let array8 = [].concat(array7, ['item6','item7'])
console.log("🚀 ~ file: clone.js ~ line 32 ~ array8", array8)
console.log('array8->', array8) //array8-> [ 'item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7' ]

let array9 = [...array1, 'sandy', 'avoy']
console.log('array9->', array9) //array9-> [ 'item1', 'item2', 'item3', 'sandy', 'avoy' ]


let array10 = ['youtube', 'data science']
let array11 = [...array1, ...array10]
console.log("🚀 ~ file: clone.js ~ line 41 ~ array11", array11)
console.log('array11->', array11) //array11-> [ 'item1', 'item2', 'item3', 'youtube', 'data science' ]
