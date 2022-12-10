// synchronous programming vs asynchronous programming
// synchronous programming :- javascript is a synchronous programming language it's got a single thread to execute code
// setTimeout, setInterval executes when all other executions are done

// setTimeout

function hello() {
    console.log({ status: 'Hello' })
}
setTimeout(hello, 1000)


const clearTimeOutId1 = setTimeout(() => {
    console.log({ username: 'sandy003' })
}, 1000);



console.log('start script')
const clearTimeOutId2 = setTimeout(() => {
    console.log('inside setTimeout')
}, 0);

for(let i = 0; i < 1000; i++){
    console.log('......')
}
console.log('clearTimeOutId1 ->', clearTimeOutId1) // clearTimeOutId1 -> 2
console.log('clearTimeOutId2 ->', clearTimeOutId2) // clearTimeOutId2 -> 3
clearTimeout(clearTimeOutId2)
console.log('end script')

// setInterval

setInterval(() => {
    console.log(Math.random())
}, 1000);
