import axiosInstance from './axios';

export const TODOS_API_URL = {
  GET: '/todos',
  GET_BY_ID: (id: number) => `/todos/${id}`,
  CREATE: '/todos',
  UPDATE: (id: number) => `/todos/${id}`,
  DELETE: (id: number) => `/todos/${id}`,
};

// 토큰이 없을 때 처리
const access_token = localStorage.getItem('token');
const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${access_token}`,
};

export const getTodos = async () => {
  const res = await axiosInstance.get(TODOS_API_URL.GET, { headers });
  return res.data;
};

export const createTodo = async (todo: string) => {
  const data = { todo };

  if (!access_token) {
    throw new Error('토큰이 존재하지 않습니다.');
  }
  const res = await axiosInstance.post(TODOS_API_URL.CREATE, data, { headers });
  return res.data;
};

export const updateTodo = async (
  id: number,
  todo: string,
  isCompleted: boolean
) => {
  const data = { todo, isCompleted };
  const res = await axiosInstance.put(TODOS_API_URL.UPDATE(id), data, {
    headers,
  });
  return res.data;
};

export const deleteTodo = async (id: number) => {
  const res = await axiosInstance.delete(TODOS_API_URL.DELETE(id), { headers });
  return res.data;
};
