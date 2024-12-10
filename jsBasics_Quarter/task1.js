function handleNum(number, evenCall, oddCall) {
	if (number % 2 === 0) {
		return evenCall();
	} else return oddCall();
}

const handleEven = () => {
	console.log('number is even');
};

const handleOdd = () => {
	console.log('number is odd');
};

handleNum(5, handleEven, handleOdd);
handleNum(8, handleEven, handleOdd);
