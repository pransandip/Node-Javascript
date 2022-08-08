(function day(val) {
    switch (val) {
        case 0: return console.log('sunday');
        case 1: return console.log('monday');
        case 2: return console.log('tuesday');
        case 3: return console.log('wednesday');
        case 4: return console.log('thrusday');
        case 5: return console.log('friday');
        case 6: return console.log('saturday');
    }
})(2); //tuesday


/** sum of n natural numbers */
(function num(n) {
    let result = (n * (n + 1)) / 2
    console.log(result)
})(3);  //6


let total = 0
let i = 0
for (; i <= 3; i++) {
    total = total + i
}
console.log(total)  //6