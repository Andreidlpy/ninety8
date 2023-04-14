
import axios from 'axios';

const apiStrapi = axios.create( {
    baseURL: 'https://climaapp-production.up.railway.app/api',
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