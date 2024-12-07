let i = 0;
const getRandomNumber = () => Math.floor(Math.random() * 10) + 1;
const number = getRandomNumber();
while (i <= 10) {
	let result = number * i;
	console.log(`${number} * ${i} = ${result}`);
	i++;
}
