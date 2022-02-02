import axios from "axios";

export const key = "9eb8673c3dd126f9216ee876a7ab10ace8201796";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': `Bearer ${key}`
    }
})

export default api;