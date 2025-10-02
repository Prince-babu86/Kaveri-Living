import axios from 'axios'


const axiosInstance = axios.create({
    baseURL: 'https://kaveri-living.onrender.com',
    withCredentials: true,
})

export default axiosInstance;