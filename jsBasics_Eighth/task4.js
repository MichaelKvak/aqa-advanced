import fetch from "node-fetch";

// for Todo data request 
class TodoService {
    async fetchTodo() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const todo = await response.json();
            console.log('Todo Data:', todo);
            return todo;
        } catch (error) {
            console.error("Request error:", error.message);
            throw error;
        }
    }
}

// for User data request
class UserService {
    async fetchUser() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
            if (!response.ok) {
                throw new Error(`Unable to retrieve user: ${response.status}`);
            }
            const user = await response.json();
            console.log("User Data:", user);
            return user;
        } catch (error) {
            console.error("Request error:", error.message);
            throw error;
        }
    }
}

// for Promise.all and Promise.race
class DataFetcher {
    constructor() {
        this.todoService = new TodoService();
        this.userService = new UserService();
    }

    // Promise.all method
    async fetchDataWithAll() {
        const promises = [this.todoService.fetchTodo(), this.userService.fetchUser()];

        try {
            const [todo, user] = await Promise.all(promises);
            console.log("Data from Promise.all:");
            console.log("Todo Data:", todo);
            console.log("User Data:", user);
        } catch (error) {
            console.error("Error in Promise.all:", error.message);
        }
    }

    // Promise.race method
    async fetchDataWithRace() {
        const promises = [this.todoService.fetchTodo(), this.userService.fetchUser()];

        try {
            const raceResult = await Promise.race(promises);
            console.log("Winner from Promise.race:");
            console.log(raceResult);
        } catch (error) {
            console.error("Error in Promise.race:", error.message);
        }
    }
}


const dataFetcher = new DataFetcher();
dataFetcher.fetchDataWithAll();
dataFetcher.fetchDataWithRace();
