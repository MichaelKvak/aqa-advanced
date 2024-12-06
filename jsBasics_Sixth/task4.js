const person = {
	firstName: 'Michael',
	lastName: 'Kvak',
	age: 37,
};

console.log(person);

person.email = 'mkvak1987@gmail.com';
delete person.age;

console.log(person);
