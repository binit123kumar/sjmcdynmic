import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'https://localhost:7050/api';

const client = axios.create({ baseURL: API_URL });

client.interceptors.request.use((config) => {
  const token = localStorage.getItem('sjmc_token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

client.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err?.response?.status === 401) {
      localStorage.removeItem('sjmc_token');
      localStorage.removeItem('sjmc_user');
      window.location.href = '/admin/login';
    }
    return Promise.reject(err);
  }
);

export const API_BASE = API_URL.replace(/\/api\/?$/, '');

export function fileUrl(relativePath) {
  if (!relativePath) return null;
  return `${API_BASE}${relativePath}`;
}

export default client;
