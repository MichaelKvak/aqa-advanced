import fetch from "node-fetch";

function fetchTodo() {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((todo) => {
            console.log('Todo Data:', todo);
            return todo;
        })
        .catch((error) => {
            console.error("Request error:", error.message);
            throw error;
        });
}

function fetchUser() {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Unable to retrieve user: ${response.status}`);
            }
            return response.json();
        })
        .then((user) => {
            console.log("User Data:", user);
            return user;
        })
        .catch((error) => {
            console.error("Request error:", error.message);
            throw error;
        });
}

function fetchData() {
    const promises = [fetchTodo(), fetchUser()];

   Promise.all(promises)
        .then(([todo, user]) => {
            console.log("Data from Promise.all:");
            console.log("Todo Data:", todo);
            console.log("User Data:", user);
        })
        .catch((error) => {
            console.error("error Promise.all:", error.message);
        });

    Promise.race(promises)
        .then((result) => {
            console.log("Winner Promise.race:");
            console.log(result);
        })
        .catch((error) => {
            console.error("error Promise.race:", error.message);
        });
}

fetchData();