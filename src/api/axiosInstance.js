import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://api.acharyaprashant.org/v2/legacy'
})

export default axiosInstance