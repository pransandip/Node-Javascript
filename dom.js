// browser first parse html and convert it to a object called document. then it will add this object to window object

console.log(window.document)  // #document html representation
console.dir(window.document) // #document object representation
console.dir(document)       // #document object representation

console.log(document.getElementById('main-heading')) // <h2 id="main-heading"></h2>
console.log(typeof document.getElementById('main-heading')) // object
console.dir(document.getElementById('main-heading'))

console.log('-----------------------------------------------')

const abc = 'abc'
const bca = abc.slice(0).concat(['123'])
console.log(bca) // abc123


// get element using query selector 
// it will work with everything :- id, classes

const queryselector = document.querySelector('#main-heading')
console.log(queryselector) // <h2 id="main-heading"></h2>

const navitem = document.querySelector('.nav-item')
console.log(navitem) // <li class="nav-item"><a href="#home">Home</a></li>  :- one nav item

console.log('-------------------------------------------------')

const mainHeading = document.getElementById('main-heading')
console.log(mainHeading.textContent) // Manage your tasks Hello
console.log(mainHeading.innerText) // Manage your tasks
mainHeading.textContent = 'Welcome! sandip'
console.log(mainHeading.textContent) // Welcome! sandip

// change the style of a element

const headline = document.querySelector('div.headline h2')
console.log(headline)        // <h2 id="main-heading">Welcome! sandip</h2>
console.log(headline.style) // CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}
headline.style.color = '#556688'
headline.style.backgroundColor = 'white'

console.log('--------------------------------------------------')

const link = document.querySelector('a') // return first anchor tag
console.log(link.getAttribute('href')) // #home
console.log(link.getAttribute('href').slice(1)) // home
link.setAttribute('href', 'https://www.google.com')
link.setAttribute('target', '_blank')

// get multiple elements using getElements by class name
// get multiple elements using query Selector All

const navElement = document.querySelectorAll('.nav-item')
console.log(navElement) // NodeList(3) [li.nav-item, li.nav-item, li.nav-item]

const navItems = document.getElementsByClassName('nav-item')
console.log(navItems) // HTMLCollection(3) [li.nav-item, li.nav-item, li.nav-item] :- it's a array like object you can do indexing only & its a iterable
console.log(navItems[0]) // <li class="nav-item"><a href="https://www.google.com" target="_blank">Home</a></li>
console.log(typeof navItems) // object
console.log(Array.isArray(navItems[0])) // false

console.log('--------------------------------------------------')

// HTMLCollection
// for loop
// for of loop
// but you can't use forEach loop

let tagItems = document.getElementsByTagName('a')

for (let i = 0; i < tagItems.length; i++) {
    console.log('tagItems->', tagItems[i]) // tagItems-> <a href style=​"background-color:​ white;​ color:​ green;​">​Todo​</a>​
    const items = tagItems[i];
    items.style.backgroundColor = 'white'
    items.style.color = 'red'
    items.style.fontWeight = 'bold'
}

console.log('--------------------------------------------------')

for (let items of tagItems) {
    console.log(items) // tagItems-> <a href style=​"background-color:​ white;​ color:​ green;​">​Todo​</a>​
    items.style.color = 'green'
}

console.log('--------------------------------------------------')

tagItems = Array.from(tagItems)
console.log(Array.isArray(tagItems)) // true

tagItems.forEach((item)=>{
    console.log('forEach->', item)
})

console.log('--------------------------------------------------')

let navElement2 = document.querySelectorAll('a')
console.log(navElement2) // NodeList(3) [a, a, a]

// NodeList
// for loop
// for of loop
// you can use forEach loop

console.log(Array.isArray(navElement2)) // false
navElement2 = Array.from(navElement2)
console.log(Array.isArray(navElement2)) // true