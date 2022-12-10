// Function returnig promise

const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];

function ricePromise() {
    return new Promise((resolve, reject) => {
        if (bucket.includes('vegetables') && bucket.includes('salt') && bucket.includes('rice')) {
            resolve('Fried Rice Done')
        } else {
            reject('Elements not present')
        }
    })
}

ricePromise()
    .then((res) => {
        console.log(res) // Fried Rice Done
    })
    .catch((err) => {
        console.log(err)
    })


// promise && setTimeout
// resolve / reject promise after 2 seconds

function myPromise() {
    return new Promise((resolve, reject) => {
        const flag = true;
        setTimeout(() => {
            if (flag) {
                resolve()
            } else {
                reject()
            }
        }, 2000);
    })
}

myPromise()
    .then(() => {
        console.log('resolve') // resolve
    })
    .catch(() => {
        console.log('rejected')
    })