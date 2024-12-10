const axios = require('axios');

const axiosInstance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com',
	timeout: 5000,
	headers: {
		'Content-Type': 'application/json',
	},
});

const get = (url, params) => axiosInstance.get(url, { params });
const post = (url, data) => axiosInstance.post(url, data);
const put = (url, data) => axiosInstance.put(url, data);
const del = (url) => axiosInstance.delete(url);

module.exports = { get, post, put, del };
