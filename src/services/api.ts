import axios from 'axios';

const API_URL = 'http://localhost:5176/api';

export const fetchUsers = async () => {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
};