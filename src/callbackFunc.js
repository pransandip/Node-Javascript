// doing callback or returning a function or doing both together its called Higher order function
// callback functions :- when a function take input parameter as a function and called it.. is a callback function

function myfunc2(name) {
    console.log('inside my func2')
    console.log(`your name is ${name}`)
}

function myfunc(callback) {
    console.log('inside my func1') // inside my func1
    callback('sandy');             // inside my func2 & your name is sandy 
}

myfunc(myfunc2)


// function returning function

function myfunc3() {
    function hello(name) {
        console.log("Hello", name)
    }
    return hello
}

const ans = myfunc3();
ans('SANDY'); // Hello SANDY  


function myfunc4() {
    function hello(name) {
        return `Hello, ${name}`
    }
    return hello
}

const ans2 = myfunc4();
console.log( ans2('SANDY2') )  // Hello, SANDY2