const users = [
	{ firstName: 'Michael', lastName: 'Need', age: '37' },
	{ firstName: 'Rue', lastName: 'Kris', age: '36' },
	{ firstName: 'Jon', lastName: 'Ros', age: '47' },
];

for (const { firstName, lastName, age } of users) {
	console.log(`first name: ${firstName}, last name: ${lastName}, age: ${age}`);
}
