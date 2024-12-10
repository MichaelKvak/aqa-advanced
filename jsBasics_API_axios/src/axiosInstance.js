const axios = require('axios');

const axiosInstance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com',
	timeout: 5000,
	headers: {
		'Content-Type': 'application/json',
	},
});

axiosInstance.interceptors.request.use(
	(config) => {
		console.log(`[REQUEST] ${config.method?.toUpperCase()} ${config.url}`, {
			headers: config.headers,
			data: config.data,
			params: config.params,
		});
		return config;
	},
	(error) => {
		console.error('[REQUEST ERROR]', error);
		return Promise.reject(error);
	},
);

axiosInstance.interceptors.response.use(
	(response) => {
		console.log(`[RESPONSE] ${response.config.method?.toUpperCase()} ${response.config.url}`, {
			status: response.status,
			data: response.data,
		});
		return response;
	},
	(error) => {
		console.error('[RESPONSE ERROR]', {
			message: error.message,
			response: error.response?.data,
			status: error.response?.status,
		});
		return Promise.reject(error);
	},
);

const get = (url, params) => axiosInstance.get(url, { params });
const post = (url, data) => axiosInstance.post(url, data);
const put = (url, data) => axiosInstance.put(url, data);
const del = (url) => axiosInstance.delete(url);

module.exports = { get, post, put, del };
