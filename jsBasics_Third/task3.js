const getRandomNumber = () => Math.floor(Math.random() * 101);
const firstNumber = getRandomNumber();
const secondNumber = getRandomNumber();

function checkOrder(available, ordered) {
	return available < ordered
		? `Your order is too large, we don’t have enough goods.`
		: ordered > 0
			? `Your order is accepted`
			: `Your order is empty`;
}

console.log(`available = ${firstNumber}, ordered = ${secondNumber}`);
console.log(checkOrder(firstNumber, secondNumber));
