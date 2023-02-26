/*? ---- Functions and typeof ---- ?*/
function print(a) {
    console.log(...a)
}
print([1, 2, 3, 4, 5])


function print2(...a) {
    console.log(a)
}
print2(1, 2, 3, 4, 5)


console.log(typeof print)


/*? ---- Switch ---- ?*/
let day = 4;

switch (day) {
    case 0:
        console.log(`Day ${day}`)
        break;
    case 1:
        console.log(`Day ${day}`)
        break;
    case 2:
        console.log(`Day ${day}`)
        break;
    case 3:
        console.log(`Day ${day}`)
        break;
    case 4:
        console.log(`Day ${day}`)
        break;
    default:
        console.log('invalid day')
}

/*? ---- While Loop ---- ?*/
let i = 0;
let temp = []
while (i <= 3) {
    temp.push(i)
    i++;
}
console.log(i)
console.log(temp)

let j = 0;
let total = 0;
while (j <= 10) {
    total = total + j;
    j++
}
console.log(total)

// sum of n natural numbers
let num = 10
let total2 = (num * (num + 1)) / 2
console.log(total2)

for (let i in [1, 2, 3, 8, 9, 7]) {
    if (i === 3) {
        continue;
    }
    console.log(i)
}