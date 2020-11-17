import axios from './axios';

const API_URL = '/valg';

export const liste = async () => {
    try {
        return await http.get(`${API_URL}`);
    } catch (feil) {
        return feil.response.data;
    }
};

export const get = async (id) => {
    try {
        return await http.get(`${API_URL}/${id}`);
    } catch (feil) {
        return feil.response.data;
    }
};

export const post = async (data) => {
    try {
        return await http.post(`${API_URL}`, data);
    } catch (feil) {
        return feil.response.data;
    }
};

export const oppdater = async (id, data) => {
    try {
        return await http.put(`${API_URL}/${id}`, data);
    } catch (feil) {
        return feil.response.data;
    }
};

export default {
    post,
    liste,
    get,
    oppdater,
};
