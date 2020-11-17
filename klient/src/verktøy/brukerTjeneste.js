import http from './axios';
import axios from './axios';

const API_URL = '/brukere';

export const liste = async () => {
    try {
        return await http.get(`${API_URL}`);
    } catch(feil) {
        return feil.response.data;
    }
};

export const get = async (id) => {
    try {
        return await http.post(`${API_URL}/${id}`);
    } catch(feil) {
        feil.response.data;
    }
};

export const post = async (data) => {
    try {
        return await http.post(`${API_URL}`, data);
    } catch(feil) {
        feil.response.data;
    }
};

export default {
    post,
    liste,
    get,
};
