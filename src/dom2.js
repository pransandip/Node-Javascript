// innerHTML
const headLine = document.querySelector('.headline')
console.log(headLine)  // div
console.log(headLine.innerHTML)  // child elements of div

headLine.innerHTML = '<h1>Sandy</h1>'
headLine.innerHTML += '<button class=\'btn\'>try me</button>'
console.log(headLine.innerHTML)  // <h1>Sandy</h1>

const rootNode = document.getRootNode()
console.log(rootNode)
console.log(rootNode.childNodes) // NodeList(2) [<!DOCTYPE html>, html]
console.log(rootNode.childNodes[1]) // <html></html>

const html = rootNode.childNodes[1]
console.log(html.childNodes)

const head = html.childNodes[0]

const body = html.childNodes[2]
console.log(body.parentElement) // <html></html>

//sibling relation
console.log(body.nextSibling) // null
console.log(head.nextSibling) // #text
console.log(head.nextElementSibling) // <body></body>
const bodyElement = head.nextElementSibling // <body></body>
console.log(bodyElement.childNodes) // NodeList(11) [text, header.header, text, section.section-todo.container, text, section.section-signup.container, text, comment, text, script, text]
