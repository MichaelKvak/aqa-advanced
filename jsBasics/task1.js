let stringVariable = 'Hello world';
let numberVariable = Math.floor(Math.random() * 100);
let booleanVariable = Math.random() < 0.5;
let nullVariable = alwaysNull();
let undefinedVariable = getUndefinedValue();

function alwaysNull() {
	return null;
}
function getUndefinedValue() {}

console.log('String:', stringVariable);
console.log('Number:', numberVariable);
console.log('Boolean:', booleanVariable);
console.log('Null:', nullVariable);
console.log('Undefined:', undefinedVariable);
