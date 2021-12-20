import axios from 'axios';
const timeout = 15000;
const instance = axios.create();

instance.defaults.timeout = timeout;

instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default instance;
