URL = 'https://jsonplaceholder.typicode.com/posts';
const xhr = new XMLHttpRequest();
// console.log(xhr)

// step 1
// GET can be small or Caps according to convention we use Caps
// console.log('xhr.readyState', xhr.readyState) // xhr.readyState 0

xhr.open('GET', URL)

// console.log('xhr.readyState', xhr.readyState) // xhr.readyState 1

// xhr.onreadystatechange = function () {
//     // console.log('xhr.readyState', xhr.readyState) // xhr.readyState 2 3 4
//     if(xhr.readyState === 4){
//         // console.log(xhr.response)
//         console.log(typeof xhr.response) // string
//         const response = xhr.response;
//         const data = JSON.parse(response)
//         console.log(data)
//     }
// }

// it will run, when readyState is 4.
xhr.onload = function () {
    const response = xhr.response;
    const data = JSON.parse(response)
    console.log(data)
}
xhr.send()
