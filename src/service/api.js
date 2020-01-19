import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';

const api = axios.create({
    baseURL: 'https://viacep.com.br/',
    adapter: jsonpAdapter,
});

export default api;
