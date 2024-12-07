const randomRadiusNumber = (max, min) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};
const radiusNumber = randomRadiusNumber(20, 100);
const circleArea = Math.PI * Math.pow(radiusNumber, 2);
const roundedCircleArea = parseFloat(circleArea.toFixed(2));

console.log('circle radius = ', radiusNumber);
console.log('circle area = ', roundedCircleArea);
