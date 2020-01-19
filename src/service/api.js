import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';

const api = axios.create({
    baseURL: 'https://viacep.com.br/ws/',
    adapter: jsonpAdapter,
    callbackParamName: 'address'
});

export default api;
