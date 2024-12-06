const randomNumber = (max, min) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};
const userAge = randomNumber(1, 100);
const isAdult = true;
const userIsAdult = userAge >= 18 ? isAdult : !isAdult;

console.log('user age = ', userAge);
console.log('is user adult = ', userIsAdult);
