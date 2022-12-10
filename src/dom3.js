const h2 = document.querySelector('h2')
// // console.log(h2.parentElement) //same thing
console.log(h2.parentNode.parentNode) // <header class="header"></header>
// const div = h2.parentNode
// div.style.backgroundColor = '#333'

document.querySelector('h2').parentNode.style.backgroundColor = '#333'

const body = document.body
console.log(body)

console.log(document.querySelector('head').querySelector('title')) // <title>My Website</title>

const navContainer = document.querySelector('.nav')
console.log(navContainer.children) // HTMLCollection(2) [h1.logo, ul.nav-items]

const sectionTodo = document.querySelector('.section-todo')
console.log(sectionTodo.classList) // DOMTokenList(2) ['section-todo', 'container', value: 'section-todo container']
sectionTodo.classList.add('sandy')
sectionTodo.classList.add('sandy2')
sectionTodo.classList.remove('sandy2')

const present = sectionTodo.classList.contains('sandy2')
console.log(present) // false

sectionTodo.classList.toggle('sandy') // if it is present then remove it if not than add it


const todo$list = document.querySelector('.todo-list')
todo$list.innerHTML += '<li>New Todo</li>'