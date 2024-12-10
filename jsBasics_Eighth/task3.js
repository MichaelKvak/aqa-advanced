import fetch from 'node-fetch';

// todo
async function fetchTodo() {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
		const todo = await response.json();
		console.log('Todo Data:', todo);
		return todo;
	} catch (error) {
		console.error('Request error:', error.message);
		throw error;
	}
}

// User
async function fetchUser() {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
		if (!response.ok) {
			throw new Error(`Unable to retrieve user: ${response.status}`);
		}
		const user = await response.json();
		console.log('User Data:', user);
		return user;
	} catch (error) {
		console.error('Request error:', error.message);
		throw error;
	}
}

// Promise.all , Promise.race
async function fetchData() {
	const promises = [fetchTodo(), fetchUser()];

	try {
		const [todo, user] = await Promise.all(promises);
		console.log('Data from Promise.all:');
		console.log('Todo Data:', todo);
		console.log('User Data:', user);
	} catch (error) {
		console.error('Error in Promise.all:', error.message);
	}

	try {
		const raceResult = await Promise.race(promises);
		console.log('Winner from Promise.race:');
		console.log(raceResult);
	} catch (error) {
		console.error('Error in Promise.race:', error.message);
	}
}

fetchData();
