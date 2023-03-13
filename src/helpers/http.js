import axios from "axios";

// Creating an instance
const instance = axios.create({
  baseURL: 'http://localhost:3004',
  timeout: 1000,
});

// intercept requests before they are handled
instance.interceptors.request.use(config => {
  const token = window.localStorage.getItem('token');
  if (token) {
    config.headers['X-Auth-Token'] = token;
  }
  return config;
},
error => {
  return Promise.reject(error)
});

instance.defaults.headers.post['Content-Type'] = 'application/json';

export default instance;
