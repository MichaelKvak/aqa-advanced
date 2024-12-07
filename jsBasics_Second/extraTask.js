function isAllUpperCase(str) {
	return str === str.toUpperCase();
}

console.log(isAllUpperCase('HELLO'));
console.log(isAllUpperCase('Hello'));
console.log(isAllUpperCase('THIS IS A TEST'));
console.log(isAllUpperCase('This is a test'));
