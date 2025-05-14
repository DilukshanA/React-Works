//sync.js
// This is a synchronous code example
// It will run in the order it is written
// and will block the execution of the next line until the current line is finished

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

for(i=0; i<1000000000; i++){
    // do nothing
}

console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);