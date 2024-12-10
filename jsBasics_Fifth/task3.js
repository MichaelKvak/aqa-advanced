const arr = [10, 20, 30, 40, 50];

const sumNumbers = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 10);

console.log(`sum elements of array: ${sumNumbers}`);
