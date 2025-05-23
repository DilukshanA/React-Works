// Imperative - how to do it

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = [];

for (let i=0; i <numbers.length; i++) {
    if( numbers[i] % 2 === 0){
        //console.log(numbers[i]);
        evenNumbers.push(numbers[i]);
    }
}

console.log(evenNumbers);