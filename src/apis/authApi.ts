import axiosInstance from './axios';

export const AUTH_API_URL = {
  LOGIN: '/auth/signin',
  SIGNUP: '/auth/signup',
};

const headers = {
  'Content-Type': 'application/json',
};

export const login = async (email: string, password: string) => {
  const data = { email, password };
  const res = await axiosInstance.post(AUTH_API_URL.LOGIN, data, { headers });
  return res.data;
};

export const signup = async (email: string, password: string) => {
  const data = { email, password };
  const res = await axiosInstance.post(AUTH_API_URL.SIGNUP, data, { headers });
  return res.data;
};
