function divide(numerator, denominator) {
	if (isNaN(numerator) || isNaN(denominator) || denominator === 0) {
		throw new Error('Wrong number');
	}
	return numerator / denominator;
}

const testCases = [
	['s', 2],
	[10, 0],
	[50, 2],
	[60, 'x'],
	[0, 90],
];

try {
	testCases.forEach(([numerator, denominator]) => {
		try {
			console.log(divide(numerator, denominator));
		} catch (e) {
			console.error(e.message);
		}
	});
} finally {
	console.log('work is finally done');
}
