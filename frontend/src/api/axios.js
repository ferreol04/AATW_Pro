import axios from 'axios';

// Crée une instance Axios avec l'URL de base
export default axios.create({
  baseURL: "http://localhost:8000", 
  withCredentials: true,  
});


 