//jsonplaceholder is the name of the website we are taking the api from

import axios from 'axios';

export default axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});
