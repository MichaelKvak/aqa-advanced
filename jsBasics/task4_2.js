const randomLengthNumber = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
const randomWidthNumber = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
const rectangularArea = randomLengthNumber * randomWidthNumber;

console.log("rectangle length = ", randomLengthNumber);
console.log("rectangle width = ", randomWidthNumber);
console.log("rectangle area = ", rectangularArea);
