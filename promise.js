// promise
// inside promise is executor function
console.log('script start')
const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];

// produce
const friedRice = new Promise((resolve, reject) => {
    if (bucket.includes('vegetables') && bucket.includes('salt') && bucket.includes('rice')) {
        resolve('Fried Rice Done')
    } else {
        reject('Elements not present')
    }
})

// consume :- browser will take care of this, it will be added to micro task queue,
// and micro task queue will execute first than call back queue because its priority is high

friedRice
    .then((res) => {
        console.log(res) // Fried Rice Done
    }, (err) => {
        console.log(err)
    })

setTimeout(() => {
    console.log('setTimeout will execute last')
}, 0);

for (let i = 0; i < 100; i++) {
    console.log(Math.random())  // 0.9348101868402015
}
console.log('script end') 