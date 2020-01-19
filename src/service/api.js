import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';

const baseURL = 'https://viacep.com.br/ws/'

const api = axios.create({
    baseURL: baseURL,
    adapter: jsonpAdapter,
    callbackParamName: 'address'
});

export default api;
