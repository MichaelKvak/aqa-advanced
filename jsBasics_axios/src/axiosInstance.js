import axios from 'axios';

const axiosInstance = create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 5000,
});

export const get = async (url, data) => {
  const response = await axiosInstance.get(url, data);
  return response;
};

export const post = async (url, data) => {
  const response = await axios.post(url, data);
  return response;
};


axiosInstance.interceptors.request.use(
  (config) => {
    console.log(`[Request] ${config.method.toUpperCase()} ${config.url}`, config.data || '');
    return config;
  },
  (error) => {
    console.error('[Request Error]', error.message);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log(`[Response] ${response.status}`, response.data);
    return response;
  },
  (error) => {
    console.error('[Response Error]', error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;