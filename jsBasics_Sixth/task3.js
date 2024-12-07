const car1 = {
	brand: 'BMW',
	model: 'e60',
	year: 2008,
};

const car2 = {
	brand: 'Mercedes',
	model: 's600',
	owner: 'Kvak',
};

const car3 = { ...car1, ...car2 };

console.log(car3);
