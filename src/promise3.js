// Promise.resolve
// Promise chaining

const myPromise = Promise.resolve(5)
myPromise.then(val => console.log(val)) // 5

Promise.resolve(10).then(value => console.log(value)) // 10

// then()
// then method always returns promise
// Promise chaining

function newPromise() {
    return new Promise((resolve, reject) => {
        resolve('foo')
    })
}

newPromise()
    .then(value => {
        console.log(value) // foo
        value += 'bar';
        return value; // internally this is happenting 'return Promise.resolve(value)' that's why we can add '.then ', we can only add '.then' in promise, not in in 'string'.
    })
    .then(value => {
        console.log(value) // foobar
        value += 'bazz';
        return value
    })
    .then(value => {
        console.log(value) // foobarbazz
    })

