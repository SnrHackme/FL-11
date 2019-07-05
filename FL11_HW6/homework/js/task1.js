const divider = 2;
const a1 = parseFloat(prompt('Enter x the A point'));
const a2 = parseFloat(prompt('Enter y the A point'));
const b1 = parseFloat(prompt('Enter x the B point'));
const b2 = parseFloat(prompt('Enter y the B point'));
const c1 = parseFloat(prompt('Enter x the C point'));
const c2 = parseFloat(prompt('Enter y the C point'));
let answer;
if (c1 === (a1 + b2) / divider && c2 === (a2 + b2) / divider) {
    answer = true;
} else {
    answer = false;
}

console.log(answer);
