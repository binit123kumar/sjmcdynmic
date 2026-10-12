export const API_BASE = (process.env.REACT_APP_API_URL || 'https://localhost:7050/api').replace(/\/api\/?$/, '');

export const getApiBase = () => API_BASE;

export const buildApiUrl = (endpoint) => {
  const base = API_BASE;
  const path = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  return `${base}${path}`;
};

export default {
  getApiBase,
  buildApiUrl,
  API_BASE,
};