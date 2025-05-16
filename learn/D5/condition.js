function checkNum(n){
    return n === 0 ? 'zero' : (n > 0 ? 'positive' : 'negative'); // This line uses a ternary operator to check if n is zero, positive, or negative.
}
console.log(checkNum(1));

const a = 1;
const b = 1;
const c = 1;

if(a === b && b === c){
    console.log('a, b, c are equal');
}else{
    console.log('a, b, c are not equal');
}

