import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'https://api.acharyaprashant.org/v2/legacy'
})