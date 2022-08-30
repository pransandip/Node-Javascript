// document.createElement
// append
// prepend
// remove

const todoList = document.createElement('li')
const txtnode = document.createTextNode('Teachers')
// const txtnode = document.textContent('Teachers') // ok
todoList.appendChild(txtnode)
console.log(todoList) // <li>Teachers</li>

const doclist = document.querySelector('.todo-list')
console.log(doclist)  // <ul class="todo-list"><li></li></ul>
// doclist.prepend(todoList)  //:- append element first position
doclist.append(todoList)

console.log(doclist.children) // HTMLCollection(2) [li, li]
doclist.children[1].remove()
console.log(doclist.children) // HTMLCollection [li]
