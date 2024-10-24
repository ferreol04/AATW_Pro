import axios from 'axios';

// Crée une instance Axios avec l'URL de base
const api = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
});

// Récupération du jeton CSRF
const getCsrfToken = async () => {
  try {
    const response = await api.get('/csrf-token');
    return response.data.csrf_token;
  } catch (error) {
    console.error("Erreur lors de la récupération du jeton CSRF :", error);
  }
};

// Ajoutez un intercepteur pour ajouter le jeton CSRF à chaque requête
api.interceptors.request.use(async (config) => {
  const csrfToken = await getCsrfToken();
  if (csrfToken) {
    config.headers['X-CSRF-TOKEN'] = csrfToken; // Ajout du jeton CSRF
  }
  return config;
});

export default api;
