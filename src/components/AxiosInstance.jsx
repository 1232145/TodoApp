import axios from 'axios';
const url = 'https://nest-js-sage.vercel.app';
//const testUrl = 'http://localhost:5000'

const axiosTodo = axios.create({
  baseURL: url, 
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  },
});

export {axiosTodo}
