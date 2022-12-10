// understand callbacks, callback hell, pyramid f doom
// Asynchronous programming
function myFunc(callback) {
    console.log('function is doing task 1')
    callback()
}

// function myFunc2(){
//     console.log('function is doing task 2')
// }

// myFunc(myFunc2)

myFunc(() => {
    console.log('function is doing task 2')
})

//=======================================

function numbers(num1, num2, func, onfail) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        func(num1, num2)
    } else {
        onfail()
    }

}

function addNum(a, b) {
    console.log(a + b)
}

numbers(4, 5, addNum, () => {
    console.log('wrong data type')
    console.log('please pass number only')
})

//==============================================
let heading1 = document.querySelector('.heading1')
let heading2 = document.querySelector('.heading2')
console.log(heading1)

setTimeout(() => {
    heading1.textContent = 'Hello India'
    heading1.style.color = 'yellow'
    setTimeout(() => {
        heading2.textContent = 'Hello India'
        heading2.style.color = 'red'
    }, 1000);
}, 1000)