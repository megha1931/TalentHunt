import axios from 'axios';
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials:true, // browser will send the cookies to server immediately by adding this field , on every signle request
})

export default axiosInstance;
