import axios from 'axios';
// import { PROPERTIES } from "@/config/properties";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// axiosInstance.defaults.headers.common.Authorization =
//   localStorage.getItem('token') || '';

export default axiosInstance;
