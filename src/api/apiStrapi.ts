
import axios from 'axios';

const apiStrapi = axios.create( {
    baseURL: 'http://localhost:8081/api',
    withCredentials: true
})

apiStrapi.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

export  default apiStrapi