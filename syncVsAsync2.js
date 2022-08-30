// setInterval
const body = document.body
const button = document.createElement('button')
button.innerText = 'pause';
body.append(button)

const btnclick = document.querySelector('button')

let intervalId = null;
if (intervalId == null){
    intervalId = setInterval(() => {
        const red = Math.floor(Math.random() * 100)
        const green = Math.floor(Math.random() * 100)
        const blue = Math.floor(Math.random() * 100)
        const rgb = `rgb(${red},${green},${blue})`
        body.style.backgroundColor = rgb;
    }, 1000);
}

btnclick.addEventListener('click', () => {
    clearInterval(intervalId)
    button.innerText = 'play'
    intervalId = null;
})