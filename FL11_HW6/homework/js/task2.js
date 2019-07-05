const b1 = parseFloat(prompt('Enter the first length of triangle'));
const b2 = parseFloat(prompt('Enter the second length of triangle'));
const b3 = parseFloat(prompt('Enter the third length of triangle'));
let answer;
if(!isNaN(b1) && !isNaN(b2) && !isNaN(b3) ) {
    if(b1 > b2 + b3 || b2 > b1 + b3 || b3 > b1 + b2) {
        answer = 'Triangle doesn’t exist';
    } else if(b1 === b2 && b1 === b3 && b2 === b3) {
        answer = 'Equivalent triangle';
    } else if(b1 === b2 && b1 !== b3 || b1 === b3 && b1 !== b2 || b2 === b3 && b2 !== b1) {
        answer = 'Isosceles triangle';
    } else {
        answer = 'Normal triangle';
    } 
} else {
    answer = 'Invalid data';
}
console.log(answer);
