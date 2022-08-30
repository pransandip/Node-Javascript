
const heading1 = document.querySelector('.heading1')
const heading2 = document.querySelector('.heading2')

function changeText(element, text, color, time, onSuccess, onfailure) {
    setTimeout(() => {
        if(element){
            element.textContent = text
            element.style.color = color
            if(onSuccess){
                onSuccess()
            }else{
                if(onfailure){
                    onfailure()
                }
            }
        }else{
            console.log('Element does not exist')
        }
    }, time);
}

changeText(heading1, 'Hello India', 'Yellow', 3000, ()=>{
    changeText(heading2, 'Hello Sandy', 'Red', 2000)
}, ()=>{
    console.log('Callback Element does not exist')
})