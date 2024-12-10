const getRandomNumber = () => Math.floor(Math.random() * 10) + 1;
const number = getRandomNumber();

for (let i = 1; i <= 10; i++) {
	let result = number * i;
	console.log(`${number} * ${i} = ${result}`);
}
