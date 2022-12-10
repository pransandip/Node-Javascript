const heading1 = document.querySelector('.heading1')
const heading2 = document.querySelector('.heading')
const heading3 = document.querySelector('.heading3')

function changeText(element, text, color, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (element) {
                element.textContent = text
                element.style.color = color
                resolve()
            } else {
                reject('Element not found')
            }
        }, time);
    })
}

changeText(heading1, 'one', 'Yellow', 1000)
    .then(() => {
        return changeText(heading2, 'two', 'red', 1000) // return added otherwise both block will execute in same time
    })
    .then((data) => {
        console.log(data)   // undefined because resolve not returning anything
        changeText(heading3, 'three', 'cyan', 1000)
    })
    .catch((err) => console.log(err))