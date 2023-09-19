import  axios  from "axios";
const url = import.meta.env.VITE_URL_BACKEND;
console.log(url);

const instance = axios.create({
    baseURL: url ? url: 'https://localhost:3010/api',
    timeout: 1000,
    headers: {'content-type': 'application/json'}
  });

export default instance