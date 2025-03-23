// Configure API base URL based on environment
const API_BASE_URL = process.env.NODE_ENV === 'production'
  ? 'https://tur-orienterings-app-backend.onrender.com'
  : 'http://localhost:8000';

export default API_BASE_URL; 