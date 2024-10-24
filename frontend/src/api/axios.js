import axios from 'axios';

// Crée une instance Axios avec l'URL de base
const api = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
});


export default api;
